import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: '1', title: 'Tab 1', content: 'Some text 1' },
  { id: '2', title: 'Tab 2', content: 'Some text 2' },
  { id: '3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  return (
    <div data-cy="Tabs">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
              data-cy="Tab"
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId
          ? tabs.find(tab => tab.id === tabId)?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
