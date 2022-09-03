import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { HomePage } from './HomePage';
import { Tabs } from './Tabs';
import { PageNotFound } from './PageNotFound';

export const App = () => (
  <>
    <Navbar />
    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </>
);
