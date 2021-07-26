import React from 'react';
import { NavLink, RouteComponentProps } from 'react-router-dom';
import { Tab } from './Tab';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: TabsPageProps = ({ match }) => {
  const selectedTab = tabs.find(tab => tab.id === match.params.tabId);

  let tabTitle = selectedTab
    ? selectedTab.title
    : 'Please select a tab'

  console.log(tabTitle)

  return (
  <div>
    <nav className="navbar has-shadow">
    {tabs.map(tab => (
      <NavLink
        to={`/tabs/${tab.id}`}
        exact
        className="navbar-item is-tab"
        activeClassName="is-active"
      >
        {tab.title}
      </NavLink>
    ))}
    </nav>

    <Tab title={tabTitle} />
  </div>
)};
