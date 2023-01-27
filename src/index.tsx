import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { TabPage } from './pages/TabPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="/tabs">
          <Route index element={<TabPage />} />
          <Route path=":tabId" element={<TabPage />} />
        </Route>

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root'),
);
