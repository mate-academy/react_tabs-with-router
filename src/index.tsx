import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFound';
import { Tabs } from './components/Tabs';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
        </Route>

        <Route path="/tabs" element={<Tabs />}>
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
