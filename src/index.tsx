import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
        <Route path="/tabs">
          <Route index element={<Tabs />} />
          <Route path="/tabs/:tabId" element={<Tabs />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
