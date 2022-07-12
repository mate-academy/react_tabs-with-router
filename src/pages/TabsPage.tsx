import React from 'react';
import {
  NavLink,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Tab } from './Tab';
import { tabs } from '../api/tabs';

export const TabsPage: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="title is-3">This is tabs page</h1>
      <div className="tabs">
        <ul className="is-spaced">
          {tabs.map(tab => (
            <li key={tab.id} className={`
                ${pathname === `/tabs/${tab.id}` ? 'is-active' : ''}
              `}>
              <NavLink
                to={`${tab.id}`}
                className="nav-item">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>

      {pathname === '/tabs' && (<p>Please select a tab</p>)}

      <Routes>
        <Route path=":id" element={<Tab />} />
      </Routes>
    </>
  );
};
