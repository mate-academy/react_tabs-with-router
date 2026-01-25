import classNames from 'classnames';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../../store/TabsContext';

export const TabsList = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
