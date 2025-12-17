import React from 'react';
import { Link } from 'react-router-dom';
import { tabs } from '../App';

interface Props {
  currentTabId?: string;
}

export const TabsBlock: React.FC<Props> = ({ currentTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={currentTabId === tab.id ? 'is-active' : ''}
          >
            <Link to={`/tabs/${tab.id}`}> {tab.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
