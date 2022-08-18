import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { Nav } from './components/Nav';

const App = () => (
  <>
    <Nav />

    <div className="section">
      <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>
    </div>
  </>
);

export default App;
