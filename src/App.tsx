import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { TabsProvider } from './components/TabsContext';

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <TabsProvider.Provider value={tabs}>
    <Navigation />
    <div className="container">
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs/:tabId?" element={<TabsPage />} />
        <Route
          path="*"
          element={
            <div className="section">
              <h1 className="title">Page not found</h1>
            </div>
          }
        />
      </Routes>
    </div>
  </TabsProvider.Provider>
);
