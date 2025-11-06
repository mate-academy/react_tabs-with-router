import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

import React from 'react';
import { TabBar } from './components/TabBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Home } from './components/Home';
import { TabsContent } from './components/TabsContent';
import { PageNotFounded } from './components/PageNotFounded';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <TabBar />
    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/tabs" element={<Tabs tabs={tabs} />}>
        <Route index element={<p>Please select a tab</p>} />
        <Route path=":tabId" element={<TabsContent tabs={tabs} />} />
      </Route>
      <Route path="*" element={<PageNotFounded />} />
    </Routes>
  </>
);
