/* eslint-disable react/jsx-filename-extension */
import { mount } from '@cypress/react18';
import { Tabs } from './Tabs';

const page = {
  tabs: () => cy.byDataCy('Tab'),
  content: () => cy.byDataCy('TabContent'),
  tab: index => page.tabs().eq(index),
  tabLink: index => page.tab(index).find('a'),
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

      mount(
        <Tabs
          tabs={tabs}
          activeTabId="tab-20"
          onTabSelected={cy.spy().as('onTabSelected')}
        />,
      );
    });

    it('should render all tabs', () => {
      page.tabs().should('have.length', 4);

      page.tab(0).should('have.text', 'Tab 10');
      page.tab(1).should('have.text', 'Tab 20');
      page.tab(2).should('have.text', 'Tab 30');
      page.tab(3).should('have.text', 'Tab 40');
    });

    it('should have a link in each tab', () => {
      page
        .tabLink(0)
        .should('have.text', 'Tab 10')
        .and('have.attr', 'href', '#tab-10');

      page
        .tabLink(3)
        .should('have.text', 'Tab 40')
        .and('have.attr', 'href', '#tab-40');
    });

    it('should highlight only a selected tab', () => {
      page.tab(0).should('not.have.class', 'is-active');
      page.tab(1).should('have.class', 'is-active');
      page.tab(2).should('not.have.class', 'is-active');
      page.tab(3).should('not.have.class', 'is-active');
    });

    it('should show the content of the selected tab', () => {
      page.content().should('have.text', 'Some text 20');
    });

    it('should not invoke onTabSelected callback before click', () => {
      cy.get('@onTabSelected').should('not.be.called');
    });

    it('should invoke onTabSelected if another tab is clicked', () => {
      page.tabLink(3).click();

      cy.get('@onTabSelected').should('be.calledOnce');
    });

    it('should invoke onTabSelected with id of new selected tab', () => {
      page.tabLink(3).click();

      cy.get('@onTabSelected').should('be.calledWith', 'tab-40');
    });

    it('should not invoke onTabSelected if the current tab is clicked', () => {
      page.tabLink(1).click();

      cy.get('@onTabSelected').should('not.be.called');
    });
  });

  describe('', () => {
    it('should highlight the first tab if activeTabId is wrong', () => {
      const tabs = [
        { id: 'tab-10', title: 'Tab 10', content: 'Some text 10' },
        { id: 'tab-20', title: 'Tab 20', content: 'Some text 20' },
        { id: 'tab-30', title: 'Tab 30', content: 'Some text 30' },
        { id: 'tab-40', title: 'Tab 40', content: 'Some text 40' },
      ];

      mount(<Tabs tabs={tabs} activeTabId="asdasd" onTabSelected={() => {}} />);

      page.tab(0).should('have.class', 'is-active');
      page.tab(1).should('not.have.class', 'is-active');
    });
  });
});
