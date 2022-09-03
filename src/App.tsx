import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Nav } from './Nav';
import { Tabs } from './Tabs';
import { HomePage } from './HomePage';
import {PageNotFound} from './PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Nav />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/tabs">
              <Route index element={<Tabs tabs={tabs} />} />
              <Route path=":id" element={<Tabs tabs={tabs} />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
