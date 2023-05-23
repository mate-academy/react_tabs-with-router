import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { TabsList } from './components/TabsList';
import { PageNotFound } from './components/PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="home" element={<Navigate to="/" />} />

      <Route path="tabs">
        <Route index element={<TabsList tabs={tabs} />} />
        <Route path=":tabId" element={<TabsList tabs={tabs} />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);
