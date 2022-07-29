import { Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import TabsPage from './Components/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <div className="App">
      <div className="tabs is-boxed">
        <nav className="nav">
          <NavLink
            className={({ isActive }) => (isActive
              ? 'is-active' : 'not-active')}
            to="/"
          >
            Home page
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive
              ? 'is-active' : 'not-active')}
            to="/tabs"
          >
            People page
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route
          path="/"
          element={(
            <h1 className="title is-1 is-spaced">
              Home page
            </h1>
          )}
        />
        <Route path="/home" element={<p>Home page</p>} />
        <Route path="tabs/:tabId" element={<TabsPage tabs={tabs} />} />
        <Route path="/tabs" element={<TabsPage tabs={tabs} />} />

        <Route
          path="*"
          element={
            <p>Home page</p>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
