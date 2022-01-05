import React from 'react';
import classNames from 'classnames';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Tab } from '../../types/Tab';

import './TabsPage.scss';
import { TabContent } from '../TabContent/TabContent';

type Props = {
  tabs: Tab[],
};

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <div className="tabs">
        <h2>Tabs page</h2>
        <ul className="tabs__list">
          {tabs.map(tab => (
            <NavLink
              key={tab.id}
              to={`/tabs/${tab.id}`}
              className={({ isActive }) => classNames('tabs__item', { 'tabs__item--active': isActive })}
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
};
