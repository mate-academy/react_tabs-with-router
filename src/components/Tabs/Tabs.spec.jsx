/* eslint-disable react/jsx-filename-extension */
import { mount } from '@cypress/react';
import { Tabs } from './Tabs';

const page = {
  getByDataCy: name => cy.get(`[data-cy="${name}"]`),
  tabs: () => page.getByDataCy('Tab'),
  content: () => page.getByDataCy('TabContent'),
};

describe('Tabs component', () => {
  describe('by default', () => {
    beforeEach(() => {
      const tabs = [
        { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
        { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
        { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
        { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
      ];

      mount((
        <Tabs
          tabs={tabs}
          selectedTabId="tab-20"
          onTabSelected={cy.spy().as('onTabSelected')}
        />
      ));
    });

    it('should render all tabs', () => {
      page.tabs().should('have.length', 4);

      page.tabs().eq(0).should('have.text', 'Tab 10');
      page.tabs().eq(1).should('have.text', 'Tab 20');
      page.tabs().eq(2).should('have.text', 'Tab 30');
      page.tabs().eq(3).should('have.text', 'Tab 40');
    });

    it('should have a link in each tab', () => {
      page.tabs().eq(0).find('a')
        .should('have.text', 'Tab 10')
        .and('have.attr', 'href', '#tab-10');

      page.tabs().eq(3).find('a')
        .should('have.text', 'Tab 40')
        .and('have.attr', 'href', '#tab-40');
    });

    it('should highlight only a selected tab', () => {
      page.tabs().eq(1).should('have.class', 'is-active');
      page.tabs().eq(0).should('not.have.class', 'is-active');
      page.tabs().eq(2).should('not.have.class', 'is-active');
    });

    it('should show the content of the selected tab', () => {
      page.content().should('have.text', 'Some text 20');
    });

    it('should not invoke onTabSelected callback before click', () => {
      cy.get('@onTabSelected').should('not.be.called');
    });

    it('should invoke onTabSelected if another tab is clicked', () => {
      page.tabs().eq(3).find('a').click();

      cy.get('@onTabSelected').should('be.calledOnce');
    });

    it('should invoke onTabSelected with tab data', () => {
      page.tabs().eq(3).find('a').click();

      const tabData = {
        id: 'tab-40',
        title: 'Tab 40',
        content: 'Some text 40',
      };

      cy.get('@onTabSelected').should('be.calledWith', tabData);
    });

    it('should not invoke onTabSelected if the current tab is clicked', () => {
      page.tabs().eq(1).find('a').click();

      cy.get('@onTabSelected').should('not.be.called');
    });
  });

  describe('', () => {
    it('should highlight the first tab if selectedTabId is wrong', () => {
      const tabs = [
        { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
        { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
        { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
        { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
      ];

      mount((
        <Tabs
          tabs={tabs}
          selectedTabId="asdasd"
          onTabSelected={() => { }}
        />
      ));

      page.tabs().eq(0)
        .should('have.class', 'is-active');

      page.tabs().eq(1)
        .should('not.have.class', 'is-active');
    });
  });
});
