import { BrowserRouter as Router, Routes, Route, Navigate, } from 'react-router-dom';
import { App } from './App';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsPage } from './components/tabsPage';
import { HomePage } from './components/homePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<HomePage /> } />
          <Route path="home" element={<Navigate to='..' />} />

        <Route path='tabs/:tabId?'>
          <Route index element={<TabsPage />} />
        </Route>
      </Route>

      <Route path='*' element={
        <h1 className="title">Page not found</h1>
      } />
    </Routes>
  </Router>
);
