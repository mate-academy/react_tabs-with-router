import { NavLink, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import 'bulma/css/bulma.css';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App container">
    <nav className="navbar">
      <NavLink
        className={({ isActive }) => (
          `navbar-item is-tab ${isActive ? ' is-active' : ''}`
        )}
        to="/"
      >
        Home Page
      </NavLink>

      <NavLink
        className={({ isActive }) => (
          `navbar-item is-tab ${isActive ? ' is-active' : ''}`
        )}
        to="/tabs"
      >
        Tabs
      </NavLink>
    </nav>

    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
        <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
      </Routes>
    </main>
  </div>
);

export default App;
