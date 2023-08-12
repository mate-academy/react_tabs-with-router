import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { Error } from './components/Error';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        <Route path="tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
