import { Link, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.scss';

const App = () => (
  <div className="app">
    <h1 className="app__title">Tabs with router</h1>
    <nav className="app__nav">
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
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route path=":tabId" />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
