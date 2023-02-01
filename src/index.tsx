import ReactDOM from 'react-dom';
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage/HomePage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { TabsPage } from './components/TabsPage/TabsPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
