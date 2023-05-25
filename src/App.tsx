import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/Nav';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Nav />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs/*" element={<Tabs />}>
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
