/// <reference = cypress>
  
// Caso de teste 1: Verificar se os elementos-chave da página de login estão presentes
it('Os elementos-chave da página de login estão presentes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').should('be.visible')
    cy.get('[data-test=password]').should('be.visible')
    cy.get('.btn_action').should('be.visible')
})

// Caso de teste 2: Login com sucesso
it('Login com sucesso', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.url().should('include', '/inventory.html')
})

// Caso de teste 3: Logout
it('Logout', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})

// Caso de teste 4: Adicionar um item ao carrinho
it('Adicionar um item ao carrinho', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('.btn_primary.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
})

// Caso de teste 5: Remover um item do carrinho
it('Remover um item do carrinho', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('.btn_action').click()
    cy.get('.btn_primary.btn_inventory').first().click()
    cy.get('.btn_secondary.btn_inventory').first().click()
    cy.get('.shopping_cart_badge').should('not.exist')
})

// Caso de teste 6 (negativo): Tentativa de login com credenciais inválidas
it('Tentativa de login com credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test=username]').type('invalid_user')
    cy.get('[data-test=password]').type('invalid_password')
    cy.get('.btn_action').click()
    cy.get('[data-test=error]').should('be.visible')
})
