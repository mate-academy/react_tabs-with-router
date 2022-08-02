import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bulma';
import { Status } from './Type/Status';
import { PageTabs } from './Components/PageTab';
import { Tab } from './Type/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const getLinkStyle = (status: Status): React.CSSProperties => {
    return status.isActive ? { backgroundColor: '#ccc' } : {};
  };

  return (
    <div className="App">
      <nav className="nav">
        <NavLink
          to="/"
          style={getLinkStyle}
          className="nav__page"
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          style={getLinkStyle}
          className="nav__page"
        >
          Tabs
        </NavLink>
      </nav>

      <Routes>
        <Route
          path="/"
          element={(
            <p className="nav__text">Home page</p>
          )}
        />

        <Route path="/tabs">
          <Route
            index
            element={(
              <PageTabs tabs={tabs} />
            )}
          />
          <Route
            path=":tabId"
            element={(
              <PageTabs tabs={tabs} />
            )}
          />
        </Route>

        <Route
          path="*"
          element={(
            <p className="nav__text">Not Found Page</p>
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
