import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPage';
import { PageNotFound } from './Pages/PageNotFound';
import { Navigation } from './Components/Navigation';

export const App = () => (
  <>
    <Navigation />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/home*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  </>
);
