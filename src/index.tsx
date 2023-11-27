import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { TabList } from './components/TabList/TabList';
import { TabItem } from './components/TabItem/TabItem';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route>
        <Route path="/:path?" element={<App />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<TabList />}>
            <Route path=":tabId?" element={<TabItem />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
