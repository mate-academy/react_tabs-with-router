import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive
          ? 'nav__link nav__link--active'
          : 'nav__link'
        )}
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs"
        className={({ isActive }) => (isActive
          ? 'nav__link nav__link--active'
          : 'nav__link'
        )}
      >
        Tabs
      </NavLink>
    </nav>
    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
    </Routes>
  </div>
);

export default App;
