// src/components/Home.spec.tsx
import React from 'react';
import Home from './Home';

// O bloco describe agrupa os testes
describe('Componente Home', () => {
  // O teste verifica se o título está na página
  it('deve exibir o título da página', () => {
    // O comando 'cy.mount' agora funciona
    // porque o Cypress está no modo de componente
    cy.mount(<Home />);
    cy.contains('h1', 'Página Inicial').should('exist');
  });

  // Outro teste para verificar a mensagem de boas-vindas
  it('deve exibir a mensagem de boas-vindas', () => {
    cy.mount(<Home />);
    cy.contains('p', 'Bem-vindo à nossa aplicação!').should('exist');
  });
});
