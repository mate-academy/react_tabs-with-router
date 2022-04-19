import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import classNames from 'classnames';
import { Tabs } from './components/Tabs/Tabs';
import { Navigation } from './components/Navigation/Navigation';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => classNames(
            'nav__link',
            { 'nav__link--active': isActive },
          )}
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className={({ isActive }) => classNames(
            'nav__link',
            { 'nav__link--active': isActive },
          )}
        >
          Tabs
        </NavLink>
      </nav>
    </header>
    <main className="main">
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="home" element={<Navigation />} />
        <Route path="tabs/" element={<Tabs tabs={tabs} />} />
        <Route path="tabs/:tabId" element={<Tabs tabs={tabs} />} />
      </Routes>
    </main>
  </div>
);

export default App;
