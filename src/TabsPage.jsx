import React from 'react';
import {
  NavLink, Routes, Route, useLocation,
} from 'react-router-dom';
import { tabs } from './tabs';
import { Tab } from './Tab';

export const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>
    <div className="tabs is-left">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={(useLocation().pathname === `/tabs/${tab.id}`) ? 'is-active' : ''}
          >
            <NavLink
              to={`${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>

        ))
    }
      </ul>
    </div>
    {useLocation().pathname === '/tabs' && (<p>Please select a tab</p>)}
    <Routes>
      <Route path=":id" element={<Tab />} />
    </Routes>

  </>
);
