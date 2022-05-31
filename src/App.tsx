import { Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { NotFoundPage } from './components/NotFoundPage';
import './App.scss';

const App = () => (
  <div className="app">
    <h1 className="app__title">Tabs with router</h1>
    <nav>
      <Link
        to="/"
        className="app__link"
      >
        Home page
      </Link>
      <Link
        to="/tabs"
        className="app__link"
      >
        Tabs page
      </Link>
    </nav>

    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/tabs"
        element={<TabsPage />}
      >
        <Route path=":selectedTabId" />
      </Route>
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>

  </div>
);

export default App;
