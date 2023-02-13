import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './HomePage';
import { Tabs } from './Tabs';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>

        <Route index element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />

        <Route path="/tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
