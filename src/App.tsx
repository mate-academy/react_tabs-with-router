import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';
import { Nav } from './Nav';

const App = () => (
  <>
    <Nav />
    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  </>
);

export default App;
