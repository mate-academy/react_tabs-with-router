import React from 'react';
import {
  Routes,
  Route,
  NavLink,
  useParams,
} from 'react-router-dom';
import { Tab } from './Tab';
import { tabs } from '../components/data';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title is-4">Tabs page</h1>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === tabId ? 'is-active' : ''}
            >
              <NavLink
                to={`/tabs/${tab.id}`}

              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {tabId ? <Tab /> : <p>Please select a tab</p>}

      <Routes>
        <Route path=":tabId" element={<Tab />} />
      </Routes>
    </>
  );
};
