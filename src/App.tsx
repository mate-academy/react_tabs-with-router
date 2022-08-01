import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { PageInfo } from './components/PageInfo/PageInfo';
import { tabs } from './api/tabs';
import { TabsPage } from './components/TabsPage/TabsPage';
import { TabOutlet } from './components/TabsOutlet/TabsOutlet';
import { Loader } from './components/Loader';

export const App = () => {
  const activeLink = ({ isActive }: any) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  });

  return (
    <div className="App">
      <header className="App__header">
        <nav className="tabs is-large App__nav">
          <NavLink
            to="/"
            style={activeLink}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            style={activeLink}
          >
            Tabs
          </NavLink>
        </nav>
      </header>

      <div className="App__container">
        <Routes>
          <Route path="/">
            <Route
              index
              element={<HomePage />}
            />
          </Route>

          <Route
            path="tabs"
            element={<TabOutlet />}
          >
            <Route
              path=""
              element={<TabsPage tabsFromServer={tabs} />}
            />
            <Route
              path=":id"
              element={<PageInfo />}
            />
          </Route>
          <Route
            path="*"
            element={<Loader />}
          />
        </Routes>
      </div>
    </div>
  );
};
