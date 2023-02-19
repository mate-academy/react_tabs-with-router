import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { ErrorPage } from './components/ErrorPage';

export const App = () => (
  <>
    <Navigation />
    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/tabs">
            <Route index element={<Tabs />} />
            <Route path="/tabs/:tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  </>
);
