import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';
import { TabsPage } from './components/TabsPage';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <div className="App text-center p-2 m-2">
    <h1 className="p-2 m-2">Tabs with router</h1>
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage tabs={tabs} />} />
      <Route path="/tabs/:id" element={<TabsPage tabs={tabs} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);
