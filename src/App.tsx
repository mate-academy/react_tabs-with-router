import './App.scss';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import TabsPage from './components/TabsPage';
import Home from './components/Home';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <NavLink
              to="/react_tabs-with-router/"
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Home
            </NavLink>
            <NavLink
              to="/react_tabs-with-router/tabs"
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Tabs
            </NavLink>
          </nav>
        </header>
        <h1>Tabs with router</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/react_tabs-with-router/tabs"
            element={(
              <TabsPage
                tabs={tabs}
              />
            )}
          />
          <Route
            path="/react_tabs-with-router/tabs/:tabId"
            element={(
              <TabsPage
                tabs={tabs}
              />
            )}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
