import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Tab } from './components/Tab';

export const Root = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/">
            <Route index element={<h1 className="title">Home page</h1>} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />

            <Route path="/tabs" element={<Tab />}>
              <Route index />
              <Route path=":tabId?" />
            </Route>
          </Route>
        </Routes>
      </App>
    </Router>
  );
};
