import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { TabContent } from './components/TabContent';
import { TabsPage } from './components/TabsPage';
import { Redirect } from './components/Redirect';
import { PageNotFound } from './components/PageNotFound';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId?" element={<TabContent />} />
        </Route>
        <Route path="home" element={<Redirect />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
