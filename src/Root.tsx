import { HashRouter, Navigate } from 'react-router-dom';
import { App } from './App';
import { Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsList } from './Components/TabsList';
import { HomePage } from './Components/HomePage';
import { EmptyPage } from './Components/EmptyPage';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}></Route>
        <Route path="tabs">
          <Route path=":tabId?" element={<TabsList />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace={true} />} />
        <Route path="*" element={<EmptyPage />}></Route>
      </Route>
    </Routes>
  </HashRouter>
);
