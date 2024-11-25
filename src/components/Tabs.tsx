import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Props {}

export const Navigation: React.FC<Props> = () => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li data-cy="Tab" className="is-active" key={tab.id}>
            <NavLink to={tab.id}>{tab.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
