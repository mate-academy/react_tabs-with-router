import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import TabsPage from './Components/TabsPage';
import { App } from './App';
import HomeRedirect from './Components/HomeRedirect';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomeRedirect />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
};
