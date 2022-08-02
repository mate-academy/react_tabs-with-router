import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import 'bulma/css/bulma.css';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabPageInfo } from './components/TabPageInfo/TabPageInfo';
import { tabs } from './api/tabs';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Loader } from './components/Loader';

type Link = {
  isActive: boolean,
};

export const App = () => {
  const activeLink = ({ isActive }: Link) => ({
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

          <Route path="tabs">
            <Route
              index
              element={<TabsPage tabs={tabs} />}
            />
            <Route
              path=":id"
              element={<TabPageInfo tabs={tabs} />}
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
