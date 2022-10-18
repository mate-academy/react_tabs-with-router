import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Nav } from './components/Nav';
import { HomePage } from './components/Home';
import { PageNotFound } from './components/PageNotFound';
import { Tabs } from './components/Tabs';

export const App = () => (
  <>
    <div className="section">
      <div className="container">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tabs" element={<Tabs />}>
            <Route index element={<Tabs />} />
            <Route path=":selectedTabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
