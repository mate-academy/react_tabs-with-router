import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { PageNotFound } from './pages/PageNotFound';
import { TabsPage } from './pages/TabsPage';
import { Layout } from './components/Layout';

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":selectedTabId" element={<TabsPage />} />
        </Route>

        <Route path="/" element={<HomePage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </>
);
