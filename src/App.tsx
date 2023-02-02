import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/navbar';
import { TabsPage } from './components/tabsPage';
import { HomePage } from './components/homePage';
import { PageNotFound } from './components/pageNotFind';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>

          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
