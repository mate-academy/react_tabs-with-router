import { NavLink, Routes, Route } from 'react-router-dom';
import classNames from 'classnames';
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
        className={({ isActive }) => classNames(
          'navbar-item is-tab',
          { isActive },
        )}
        to="/"
      >
        Home Page
      </NavLink>

      <NavLink
        className={({ isActive }) => classNames(
          'navbar-item is-tab',
          { isActive },
        )}
        to="/tabs"
      >
        Tabs
      </NavLink>
    </nav>

    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/tabs">
          <Route index element={<TabsPage tabs={tabs} />} />
          <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
        </Route>
      </Routes>
    </main>
  </div>
);

export default App;
