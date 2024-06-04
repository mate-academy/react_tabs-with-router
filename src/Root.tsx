import { HashRouter, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { App } from './App';
import Home from './components/Home/Home';
import Tabs from './components/Tabs/Tabs';

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Root;
