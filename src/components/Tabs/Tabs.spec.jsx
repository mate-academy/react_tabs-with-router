/* eslint-disable react/jsx-filename-extension */
import { mount } from '@cypress/react18';
import { MemoryRouter } from 'react-router-dom';
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
        <MemoryRouter initialEntries={['/tabs/tab-20']}>
          <Tabs tabs={tabs} />
        </MemoryRouter>,
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
        .and('have.attr', 'href', '/tabs/tab-10');

      page
        .tabLink(3)
        .should('have.text', 'Tab 40')
        .and('have.attr', 'href', '/tabs/tab-40');
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

    // Router-driven: no onTabSelected callback tests
  });

  // No activeTabId prop: router controls activeness
});
