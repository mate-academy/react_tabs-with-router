import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import TabsPage from './TabsPage';

const App: React.FC = () => {
  const [linkIsActive, setLinkIsActive] = useState('home');

  return (
    <div className="App">
      <nav>
        <Link
          onClick={() => {
            setLinkIsActive('home');
          }}
          className={linkIsActive === 'home' ? 'link link--active' : 'link'}
          to="/"
        >
          Home page
        </Link>

        <Link
          onClick={() => {
            setLinkIsActive('tabs');
          }}
          className={linkIsActive === 'tabs' ? 'link link--active' : 'link'}
          to="/tabs"
        >
          Tabs page
        </Link>
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
