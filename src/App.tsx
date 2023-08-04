import 'bulma/css/bulma.css';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { Layout } from './components/Layout';
import { TabsPage } from './pages/TabsPage';

export const App: React.FC = () => (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="*" element={<h1 className="title">Not found</h1>} />
      </Route>

      <Route path="/tabs" element={<Layout />}>
        <Route path=":tabId?" element={<TabsPage />} />
      </Route>
    </Routes>
  </>
);
