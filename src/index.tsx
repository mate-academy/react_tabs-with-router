import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/Pages/HomePage';
import { PageNotFound } from './components/Pages/PageNotFound';
import { TabsPage } from './components/Pages/TabsPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<PageNotFound />} />

        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs">
          <Route path="*" element={<TabsPage />} />

          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root'),
);
