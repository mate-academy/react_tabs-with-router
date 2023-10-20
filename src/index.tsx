import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsComponent';
import { Home } from './components/Home';
import { NotFoundPage } from './components/NotFoundPage';
import { TabContent } from './components/TabContent';
import { Redirect } from './components/Redirect';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId?" element={<TabContent />} />
        </Route>
        <Route path="home" element={<Redirect />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
