import React from 'react';
import { tabs } from '../App';
import { Link } from 'react-router-dom';

type Props = {
  activeTabId?: string;
};

export const Tabs: React.FC<Props> = ({ activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? <p>{activeTab.content}</p> : <p>Please select a tab</p>}
      </div>
    </div>
  );
};
