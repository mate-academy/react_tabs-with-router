import { FC } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import 'bulma';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

const App: FC = () => (
  <div className="App">
    <div className="navbar has-shadow">
      <nav className="navbar-brand">
        <NavLink
          to="/"
          className={({ isActive }) => (
            isActive ? 'navbar-item--active navbar-item' : 'navbar-item')}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => (
            isActive ? 'navbar-item--active navbar-item' : 'navbar-item')}
        >
          Tabs
        </NavLink>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route path=":tabId" />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
