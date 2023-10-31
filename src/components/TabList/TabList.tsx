import { Link, useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import cn from 'classnames';
import { TabsContext } from '../../store/TabsContext';

export const TabsList: React.FC = () => {
  const { value } = useContext(TabsContext);
  const { tabId } = useParams();
  const selectedTabId = value.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {value.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
