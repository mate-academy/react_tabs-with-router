import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const [activeNavTab, setActiveNavTab] = useState(() => {
    return localStorage.getItem('activeNavTab') || '/';
  });
  const [activeTab, setActiveTab] = useState('');
  const params = useParams();

  useEffect(() => {
    // Set the active tab from URL parameter on component mount
    if (params && params.tabId) {
      setActiveTab(params.tabId);
    }
  }, [params]);

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;
  const isTabValid = tabs.some(tab => tab.id === activeTab);

  useEffect(() => {
    localStorage.setItem('activeNavTab', activeNavTab);
  }, [activeNavTab]);

  const handleNavLinkClick = (tab: string) => {
    setActiveNavTab(tab);
  };

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    `navbar-item ${isActive ? 'is-active' : ''}`;

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={getLinkClass}
              onClick={() => handleNavLinkClick('/')}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={getLinkClass}
              onClick={() => handleNavLinkClick('/tabs')}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
          {params && (
            <>
              <div className="tabs is-boxed">
                <ul>
                  {tabs.map(tab => (
                    <li
                      key={tab.id}
                      data-cy="Tab"
                      className={tab.id === activeTab ? 'is-active' : ''}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="block" data-cy="TabContent">
                {isTabValid ? activeTabContent : 'Please select a tab'}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
