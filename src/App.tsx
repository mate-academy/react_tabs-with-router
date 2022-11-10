import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';
import { Header } from './components/Header';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => (
  <>
    <Header />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={(<HomePage />)} />

          <Route
            path="home"
            element={<Navigate to="/" replace />}
          />

          <Route
            path="*"
            element={(<NotFoundPage />)}
          />

          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
