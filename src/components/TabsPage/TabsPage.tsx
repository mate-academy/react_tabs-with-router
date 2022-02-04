import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import './TabsPage.scss';
import { TabContent } from '../TabContent/TabContent';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => (
  <>
    <div className="tabs">
      <h2>Business</h2>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <NavLink
            className="tabs__item"
            to={`/tabs/${tab.id}`}
            key={tab.title}
          >
            {tab.title}
          </NavLink>
        ))}
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<TabContent tabs={tabs} />} />
      <Route path="/:tabId" element={<TabContent tabs={tabs} />} />
    </Routes>
  </>
);
