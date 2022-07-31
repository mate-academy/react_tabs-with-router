import { NavLink, Route, Routes } from 'react-router-dom';
import './App.scss';
import TabsPage from './TabsPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <NavLink
          className="link"
          to="/"
        >
          Home page
        </NavLink>

        <NavLink
          className="link"
          to="/tabs"
        >
          Tabs page
        </NavLink>
      </nav>
      <div>
        <Routes>
          <>
            <Route
              path="/"
              element={<h1>Home page</h1>}
            />

            <Route
              path="/tabs"
              element={<TabsPage />}
            >
              <Route
                path="/tabs:tabId"
                element={<TabsPage />}
              />
            </Route>
          </>
        </Routes>
      </div>
    </div>
  );
};

export default App;
