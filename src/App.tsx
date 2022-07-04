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
    <nav className="App__nav">
      <NavLink
        to="/"
        className={
          ({ isActive }) => (isActive
            ? 'App__item App__item--active'
            : 'App__item')
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/tabs/"
        className={
          ({ isActive }) => (isActive
            ? 'App__item App__item--active'
            : 'App__item')
        }
      >
        Tabs
      </NavLink>
    </nav>

    <Routes>
      <Route path="/tabs/" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route
        path="/"
        element={<h1 className="App__home-title">Home page</h1>}
      />
      <Route
        path="*"
        element={<h1 className="App__home-title">Not found page</h1>}
      />
    </Routes>
  </div>
);

export default App;
