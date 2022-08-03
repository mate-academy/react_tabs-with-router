import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Home';
import { TabsPage } from './Tabs';
import { NotFound } from './NotFound';
import { Nav } from './Nav';

export const App: React.FC = () => (
  <>
    <Nav />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Navigate to="/" replace />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />

        <Route path="*" element={<TabsPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);
