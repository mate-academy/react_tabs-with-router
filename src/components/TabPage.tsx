import React from 'react';
import { Route, Routes } from 'react-router';
// import { Link } from 'react-router-dom';
import { Tabs } from './Tab';
// import { Link, useParams } from 'react-router-dom';
import { TabContent } from './TabContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabPage: React.FC = () => (
  <>
    <Tabs tabs={tabs} />

    <Routes>
      <Route path=":tabId" element={<TabContent tabs={tabs} />} />
    </Routes>
  </>
);
