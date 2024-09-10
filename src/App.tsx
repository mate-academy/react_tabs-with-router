import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                classNames('navbar-item', { 'is-active': isActive })
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/" element={<h1 className="title">Home page</h1>} />

            <Route
              path="tabs/*"
              element={
                <>
                  <h1 className="title">Tabs page</h1>
                  <div className="tabs is-boxed">
                    <ul>
                      {tabs.map((tab) => (
                        <li
                          key={tab.id}
                          data-cy="Tab"
                          className={classNames({ 'is-active': activeTab === tab.id })}
                        >
                          <NavLink
                            to={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                          >
                            {tab.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Routes>
                    {tabs.map((tab) => (
                      <Route
                        key={tab.id}
                        path={tab.id}
                        element={
                          <div className="block" data-cy="TabContent">
                            {tab.content}
                          </div>
                        }
                      />
                    ))}

                    <Route
                      path="*"
                      element={
                        <div className="block" data-cy="TabContent">
                          Please select a tab
                        </div>
                      }
                    />
                  </Routes>
                </>
              }
            />

            <Route path="*" element={<h1 className="title">Page not found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  );
};
