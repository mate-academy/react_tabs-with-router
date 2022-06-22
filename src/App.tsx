import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App : React.FC = () => {
  return (
    <div className="App">
      <h1>Tabs with router</h1>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/tabs"
        >
          Tabs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : undefined)}
          to="/"
        >
          Home
        </NavLink>
      </nav>
      <Routes>
        <Route
          path="/tabs"
          element={(
            <>
              <p>
                Please select a tab
              </p>
              <Tabs tabs={tabs} />
            </>
          )}
        />
        <Route
          path="/tabs/:tabId"
          element={
            <Tabs tabs={tabs} />
          }
        />
        <Route
          path="*"
          element={
            <p>page not found</p>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
