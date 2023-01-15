import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { TabsPage } from './pages/Tabs.page';
import { HomePage } from './pages/Home.page';
import { TabPage } from './pages/Tab.page';
import { Page } from './components/layout/Page';
import { NotFoundPage } from './pages/NotFound.page';

export const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (pathname === '/home') {
    navigate('/');
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="tabs" element={<TabsPage />}>
            <Route path=":tabId" element={<TabPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
