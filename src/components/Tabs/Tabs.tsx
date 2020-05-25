import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css';

type Props = {
  tabs: Tab[];
  currentId: string;
};

const Tabs: React.FC<Props> = ({ tabs, currentId }) => {
  const selectedTab = tabs.find(el => el.id === currentId);

  return (
    <div>
      <h1 className="head-tab">
        Tab
        {' '}
        {currentId}
      </h1>

      <ul className="tab-list">
        {tabs.map(tab => (
          <li key={tab.id} className="tab-list__item">
            <NavLink to={`/tabs/${tab.id}`} className="tab-list__link" activeClassName="tab-list__link--active">
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        {selectedTab && (
          <div>
            <p className="text">
              {selectedTab.title}
            </p>

            <p className="text">
              {selectedTab.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
