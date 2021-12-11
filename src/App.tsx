import {
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import './App.scss';
import { TabsPage } from './Components/TabsPage/TabsPage';

const App = () => (
  <div className="App">
    <nav className="menu">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')}
      >
        Tabs
      </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<h1 className="title">Home page</h1>} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/tabs/*" element={<TabsPage />} />
      <Route path="*" element={<h2 className="title">Page not found</h2>} />
    </Routes>
  </div>
);

export default App;
