// Caso de Teste 1: Verifica se um elemento está visível
describe('Caso de Teste 1', () => {
    it('Verifica se o botão de login está visível', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('.radius').should('be.visible');
    });
  });
  
  // Caso de Teste 2: Login com sucesso
  describe('Caso de Teste 2', () => {
    it('Realiza login com credenciais válidas', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.radius').click();
      cy.get('.flash.success').should('contain', 'You logged into a secure area!');
    });
  });
  
  // Caso de Teste 3: Login falho (negativo)
  describe('Caso de Teste 3', () => {
    it('Tenta realizar login com credenciais inválidas', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('rafael');
      cy.get('#password').type('senhainvalida');
      cy.get('.radius').click();
      cy.get('.flash.error').should('contain', 'Your username is invalid!');
    });
  });
  
  // Caso de Teste 4: Função para logout
  describe('Caso de Teste 4', () => {
    function realizarLogout() {
      cy.get('.icon-2x.icon-signout').click();
      cy.get('#flash').should('contain', 'You logged out of the secure area!');
    }
  
    it('Realiza logout após login bem-sucedido', () => {
      cy.visit('https://the-internet.herokuapp.com/login');
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('.radius').click();
      realizarLogout();
    });
  });
  