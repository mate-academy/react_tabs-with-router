import {
  NavLink,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import 'bulma';
import { useState } from 'react';
import classNames from 'classnames';
import { TabsPage } from './TabsPage';
import { tabs } from './tabs';
/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  const onSelect = (tab: Tab | null) => {
    setSelectedTab(tab);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <NavLink to="/" className="navbar-item">
          Home
        </NavLink>
        <NavLink to="/tabs" className="navbar-item">
          Tabs
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/"
          element={(
            <h1 className="title has-text-centered">
              Home page
            </h1>
          )}
        />
        <Route
          path="tabs"
          element={(
            <>
              <div className="tabs is-centered">
                <ul>
                  {tabs.map(tab => (
                    <li
                      className={classNames(
                        {
                          'is-active':
                          tab.id === selectedTab?.id,
                        },
                      )}
                      key={tab.id}
                    >
                      <NavLink to={tab.id}>
                        <span className="icon is-small">
                          <i className="fas fa-image" aria-hidden="true" />
                        </span>
                        <span>{tab.title}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <Outlet />
            </>
          )}
        >
          <Route
            path=":tabId"
            element={(
              <TabsPage
                onSelect={onSelect}
                selected={selectedTab}
              />
            )}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
