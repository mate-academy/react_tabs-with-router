import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import cn from 'classnames';
import { TabContent } from '../TabContent/TabContent';
import { tabs } from '../../data/tabs';
import './Tabs.scss';

export const Tabs: React.FC = React.memo(() => (
  <div className="tabs">
    <menu className="tabs__menu">
      <nav className="tabs__list">
        {tabs.map(({ id, title }) => (
          <NavLink
            to={id}
            key={id}
            className={({ isActive }) => cn('tabs__item',
              { 'tabs__item--active': isActive })}
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </menu>

    <Routes>
      <Route path="/" element={<TabContent tabs={tabs} />} />
      <Route path="/:tabId" element={<TabContent tabs={tabs} />} />
    </Routes>
  </div>
));
