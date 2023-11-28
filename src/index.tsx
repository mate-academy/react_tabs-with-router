import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tabs">
          <Route path=":tabId?" index element={<TabsPage />} />
        </Route>
        <Route path="*" />
      </Route>
      <Route path="/home" element={<Navigate to="/" />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
