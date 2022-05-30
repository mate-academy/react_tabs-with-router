import './App.scss';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/Tabs/Tabs';
import { NotFoundPage } from './components/NotFoundPage';

const App = () => {
  return (
    <div className="app">
      <nav className="app__nav">
        <NavLink
          to="/"
          className="nav__link"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="nav__link"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}
        >
          Tabs
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs/" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
