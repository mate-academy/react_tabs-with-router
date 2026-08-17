import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { TabItem } from './components/TabItem';
import { Header } from './components/Header';
import { TabsContext } from './context/TabsContext';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <TabsContext.Provider value={tabs}>
    <Header />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/tabs" element={<Tabs />}>
            <Route index element={<p>Please select a tab</p>} />
            <Route path=":tabId" element={<TabItem />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </TabsContext.Provider>
);
