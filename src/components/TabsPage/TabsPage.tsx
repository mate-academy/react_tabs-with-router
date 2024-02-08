import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const selectedTab = tabId;
  const activeTab = tabs.filter(tab => tab.id === selectedTab)[0];

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTab === tab.id,
              })}
              key={tab.id}
            >
              {selectedTab ? (
                <NavLink to={`../${tab.id}`} relative="path">{tab.title}</NavLink>
              ) : (
                <NavLink to={`${tab.id}`}>{tab.title}</NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.id === undefined
          ? 'Please select a tab'
          : activeTab.content}
      </div>
    </div>
  );
};
