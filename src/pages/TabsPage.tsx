import React from 'react';
import classNames from 'classnames';
import { Link, useMatch, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  const match = useMatch({ path: `/tabs/${to}`, end: true });

  return (
    <li data-cy="Tab" className={classNames({ 'is-active': !!match })}>
      <Link to={`/tabs/${to}`}>{children}</Link>
    </li>
  );
};

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink key={tab.id} to={tab.id}>
              {tab.title}
            </TabLink>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
