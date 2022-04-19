import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import classNames from 'classnames';
import { Home } from './components/Home/Home';
import { Tabs } from './components/Tabs/Tabs';

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
        <Route path="/home" element={<Home />} />
        <Route path="/tabs" element={<Tabs tabs={tabs} />}>
          <Route path=":id" element={<Tabs tabs={tabs} />} />
        </Route>

      </Routes>
    </main>
  </div>
);

export default App;
