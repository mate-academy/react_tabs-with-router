// Esse arquivo é o ponto de entrada para o suporte de
// componentes. Ele simplesmente importa os comandos personalizados.
import './commands';

import { mount } from 'cypress/react18';

// Adiciona o comando `mount` ao namespace do Cypress.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
