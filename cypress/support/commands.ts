/// <reference types="cypress" />
// Arquivo de comandos padrão do Cypress.
// Ele é importado pelo 'component.ts'.
export {};

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      getByDataCy(selector: string): Chainable<JQuery<HTMLElement>>;
      byDataCy(name: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('getByDataCy', selector => {
  cy.get(`[data-cy="${selector}"]`);
});

Cypress.Commands.add(
  'byDataCy',
  { prevSubject: 'optional' },
  (subject, name) => {
    const selector = `[data-cy="${name}"]`;
    return subject ? cy.wrap(subject).find(selector) : cy.get(selector);
  },
);
