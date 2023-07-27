import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { TabContent } from './components/TabContent/TabContent';

export const App = () => (
  <>
    <Navigation />
    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/tabs" element={<TabsPage />}>
          <Route index element={<TabContent />} />
          <Route path=":tabId" element={<TabContent />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </>
);
