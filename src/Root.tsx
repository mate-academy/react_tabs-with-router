import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Components/HomePage';
import { Tabs } from './Components/Tabs';
import { Error } from './Components/Error';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="tabs">
            <Route index element={<Tabs />} />

            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
};
