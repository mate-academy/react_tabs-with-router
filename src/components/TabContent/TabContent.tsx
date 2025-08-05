import React from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import '../../App.scss';

type Props = {
  tabs: Tab[];
  activeTabID: string;
};

export const TabContent: React.FC<Props> = ({ tabs, activeTabID }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabID);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTabID ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
