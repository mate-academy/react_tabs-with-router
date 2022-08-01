/// <reference types="Cypress" />
const page = {
  getByDataCy: name => cy.get(`[data-cy="${name}"]`),
  title: () => cy.get('.title'),
  nav: () => page.getByDataCy('nav'),
  tabs: () => page.getByDataCy('tab'),
  assertContent: (text) => page.getByDataCy('tab-content').should('have.text', text),
  assertTabActive: index => page.tabs().eq(index).should('have.class', 'is-active'),
  assertTabNotActive: index => page.tabs().eq(index).should('not.have.class', 'is-active'),

}

describe('App by default', () => {
  it('should show only Home page title at /', () => {
    cy.visit('/');
    page.title()
      .should('have.length', 1)
      .and('have.text', 'Home page');
  });

  it('should not show tabs at /', () => {
    cy.visit('/');
    page.tabs()
      .should('not.exist');
  });

  it('should redirect from /home to /', () => {
    cy.visit('/#/home');
    cy.location('hash').should('eq', '#/');
    page.title().should('have.text', 'Home page');
  });

  it('should show `Page not found` title for unknown page', () => {
    cy.visit('/#/some/other/page');
    page.title().should('have.text', 'Page not found');
  });

  it('should not show tabs for unknown page', () => {
    cy.visit('/#/some/other/page');
    page.tabs().should('not.exist');
  });
});

describe('Navigation', () => {
  it('should exist on Home page', () => {
    cy.visit('/');
    page.nav().should('exist');
  });

  it('should exist on Tabs page', () => {
    cy.visit('/#/tabs');
    page.nav().should('exist');
  });

  it('should exist on exact Tab page', () => {
    cy.visit('/#/tabs/tab-1');
    page.nav().should('exist');
  });

  it('should exist on a wrong Tab page', () => {
    cy.visit('/#/tabs/wrong-tab');
    page.nav().should('exist');
  });

  it('should exist on a unknown page', () => {
    cy.visit('/#/some/not/existing/page');
    page.nav().should('exist');
  });

  it('should have a Home link with `is-active` class', () => {
    cy.visit('/');
    page.nav()
      .contains('a', 'Home')
      .should('have.attr', 'href', '#/')
      .and('have.class', 'is-active');
  });

  it('should have Tabs link without `is-active` class', () => {
    cy.visit('/');
    page.nav()
      .contains('a', 'Tabs')
      .should('have.attr', 'href', '#/tabs')
      .and('not.have.class', 'is-active');
  });

  it('should not have active links on a wrong page', () => {
    cy.visit('/#/some/not/existing/page');
   
    page.nav().contains('a', 'Home').should('not.have.class', 'is-active');
    page.nav().contains('a', 'Tabs').should('not.have.class', 'is-active');
  });
});

describe('App at `/#/tabs`', () => {
  beforeEach(() => {
    cy.visit('/#/tabs')
  });

  it('should show Tabs title', () => {
    page.title()
      .should('have.length', 1)
      .should('have.text', 'Tabs page');
  });

  it('should have Tabs link active', () => {
    page.nav()
      .contains('a', 'Tabs')
      .and('have.class', 'is-active');
  });

  it('should have Home link not active', () => {
    page.nav()
      .contains('a', 'Home')
      .and('not.have.class', 'is-active');
  });

  it('should show 3 tabs', () => {
    page.tabs()
      .should('have.length', 3);
  });

  it('should have correct link for each tab', () => {
    page.tabs().eq(0).find('a').should('have.attr', 'href', '#/tabs/tab-1');
    page.tabs().eq(1).find('a').should('have.attr', 'href', '#/tabs/tab-2');
    page.tabs().eq(2).find('a').should('have.attr', 'href', '#/tabs/tab-3');
  });

  it('should not have active tabs', () => {
    page.assertTabNotActive(0);
    page.assertTabNotActive(1);
    page.assertTabNotActive(2);
  });


  it('should have default content', () => {
    page.assertContent('Please select a tab');
  });
});

describe('Tabs page', () => {
  beforeEach(() => {
    cy.visit('/#/tabs')
  });

  it('should change page URL on tab click', () => {
    page.tabs().eq(0).click();
    cy.location('hash').should('eq', '#/tabs/tab-1');
  });

  it('should highlight only the selected tab', () => {
    page.tabs().eq(0).click();
    page.assertTabActive(0);
    page.assertTabNotActive(1);
    page.assertTabNotActive(2);
  });

  it('should show selected tab content', () => {
    page.tabs().eq(0).click();
    page.assertContent('Some text 1');
  });

  it('should show selected tab content after page relaod', () => {
    page.tabs().eq(0).click();
    cy.reload();
  });

  it('should hightlight Tabs link in the nav when a tab is selected', () => {
    cy.visit('/#/tabs/tab-1');
    page.nav().contains('a', 'Tabs')
      .should('have.class', 'is-active');
  });

  it('should correctly select a second tab', () => {
    page.tabs().eq(1).click();

    cy.location('hash').should('eq', '#/tabs/tab-2');
    page.assertContent('Some text 2')
    page.assertTabNotActive(0);
    page.assertTabActive(1);
    page.assertTabNotActive(2);
  });

  it('should correctly select a third tab', () => {
    page.tabs().eq(2).click();

    cy.location('hash').should('eq', '#/tabs/tab-3');
    page.assertContent('Some text 3')
    page.assertTabNotActive(0);
    page.assertTabNotActive(1);
    page.assertTabActive(2);
  });

  it('should not highlight any tab for a wrong tabId', () => {
    cy.visit('/#/tabs/tab-4');
    page.assertTabNotActive(0);
    page.assertTabNotActive(1);
    page.assertTabNotActive(2);
  });
  
  it('should default content for a wrong tabId', () => {
    cy.visit('/#/tabs/tab-4');
    page.assertContent('Please select a tab');
  });

  it('should hightlight Tabs link in the nav when a tabId is wrong', () => {
    cy.visit('/#/tabs/tab-4');

    page.nav().contains('a', 'Tabs')
      .should('have.class', 'is-active');
  });
});
