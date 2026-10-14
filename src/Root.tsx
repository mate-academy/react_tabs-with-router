import { Navigate, HashRouter as Router } from 'react-router-dom';
import { Tabs } from './components/Tabs/Tabs';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { App } from './App';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />}/>
          <Route path="tabs">
            <Route path=":tabId?" element={<Tabs />} />
          </Route>


        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </Router>
);
