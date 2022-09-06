import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Navigation } from './Navigation';
import { HomePage } from './HomePage';
import { PageNotFound } from './NotFoundPage';

export const App = () => (
  <>
    <Navigation />

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
