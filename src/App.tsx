import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {
  Layout,
  HomePage,
  TabsPage,
  PageNotFound,
} from './components';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route path=":tabId?" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  </Routes>
);
