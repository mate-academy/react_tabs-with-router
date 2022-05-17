/// <reference types="Cypress" />
const page = {
  assertAttribute(el, attr, assert, val) {
    cy.get(`[href*="${el}"]`)
      .invoke('attr', attr)
      .should(assert, val);
  }
}

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/#/tabs');

    cy.get('[href*="/tabs/tab-1"]')
      .parent()
      .children()
      .as('tabs');

    cy.visit('/');
  });

  it('should have <h1> `Home page` on the home page', () => {
    cy.get('h1')
      .contains('Home page');
  });

  it('should have navigation visible on both pages', () => {
    cy.contains('Home')
      .parent()
      .as('navigation')
      .should('contain', 'Tabs');

    cy.get('[href*="/tabs"]')
      .click();

    cy.get('@navigation')
      .should('contain', 'Home')
      .and('contain', 'Tabs');
  });

  it('should highlight the active navigation link', () => {
    cy.get('[href*="/tabs"]')
      .click()
      .invoke('attr', 'class')
      .then((res) => {
        cy.get('[href*="/"]')
          .contains('Home')
          .click();

        page.assertAttribute('/tabs', 'class', 'not.eq', res);

        page.assertAttribute('/', 'class', 'eq', res);
      });
  });

  it('should have `TabsPage` showing the list of tabs', () => {
    cy.visit('/#/tabs');

    cy.get('@tabs')
      .each((li) => {
        cy.get(li)
          .invoke('attr', 'href')
          .then((href) => {
            const num = href.slice(-1);

            cy.contains(`Tab ${num}`);
          });
      })
  });

  it('should change url to `/tabs/tab-<tab id>` when a tab is selected', () => {
    cy.visit('/#/tabs');

    cy.get('@tabs')
      .each((li) => {
        cy.get(li)
          .click()
          .invoke('attr', 'href')
          .then((href) => {
            const num = href.slice(-1);

            cy.url()
              .should('include', `/tab-${num}`);
          });
      })
  });

  it('should show a tab content below the tabs list', () => {
    cy.visit('/#/tabs');

    cy.get('@tabs')
      .each((li) => {
        cy.get(li)
          .click()
          .invoke('attr', 'href')
          .then((href) => {
            const num = href.slice(-1);

            cy.contains(`Some text ${num}`);
          });
      })
  });

  it('should highligh the selected tab', () => {
    cy.visit('/#/tabs');

    cy.get('[href*="/tabs/tab-1"]')
      .click()
      .invoke('attr', 'class')
      .then((res) => {
        cy.get('[href*="/tabs/tab-2"]')
          .click();

        page.assertAttribute('/tabs/tab-1', 'class', 'not.eq', res);

        page.assertAttribute('/tabs/tab-2', 'class', 'eq', res);
      });
  });

  it('should show content of the tab matching the `id` from the URL after page reload', () => {
    cy.visit('/#/tabs');

    cy.get('[href*="/tabs/tab-1"]')
      .click();

    cy.contains('Some text 1');

    cy.reload();

    cy.contains('Some text 1');
  });

  it('should show `Please select a tab` message if tab id is not valid', () => {
    cy.visit('/#/tabs');

    cy.get('[href*="/tabs/tab-1"]')
      .click();

    cy.contains('Some text 1');

    cy.visit('/#/tabs/tab-4');

    cy.contains('Please select a tab');
  });
});
