import ReactDOM from 'react-dom';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './routes/Home';
import { TabsPage } from './routes/TabsPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
