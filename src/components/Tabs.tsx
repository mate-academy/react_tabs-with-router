import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const { tabId } = useParams();
  const isSelectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === selectedTabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {isSelectedTab ? (
        <div className="block" data-cy="TabContent">
          {isSelectedTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};

export default Tabs;
