import './App.scss';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { HomePage } from './components/additional/HomePage';
import { NotFoundPage } from './components/additional/NotFoundPage';

const App = () => {
  return (
    <div className="App">
      <nav className="App__nav">
        <NavLink
          to="/"
          className="App__link"
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="App__link"
        >
          Tabs
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs/" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
