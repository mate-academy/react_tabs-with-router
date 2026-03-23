import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabContext } from '../TabContext/TabContext';

export const Tabs: React.FC = () => {
  const tabs = useContext(TabContext);
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={tab.id === tabId ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
