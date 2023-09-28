/* eslint-disable react/jsx-fragments */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFound';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="section">
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/">
              <Route path="/tabs">
                <Route index element={<Tabs />} />
                <Route path=":tabId" element={<Tabs />} />
              </Route>
              <Route index element={<Home />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
