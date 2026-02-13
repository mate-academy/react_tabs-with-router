import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Tabs } from './components';

document.documentElement.classList.add('has-navbar-fixed-top');

export const App = () => (
  <>
    <Navigation />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="/*"
            element={<h1 className="title">Page not found</h1>}
          />
        </Routes>
      </div>
    </div>
  </>
);
