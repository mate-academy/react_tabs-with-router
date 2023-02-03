import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { FC } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { TabsPage } from './components/TabsPage/TabsPage';
import { HomePage } from './components/HomePage/HomePage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

export const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="tabs" element={<TabsPage />}>
              <Route path=":tabId" element={<TabsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
