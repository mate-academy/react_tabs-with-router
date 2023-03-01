import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Homepage } from './types/components/HomePage/HomePage';
import { PageNotFound } from './types/components/PageNotFound/PageNotFound';
import { TabsPage } from './types/components/TabsPage/TabsPage';
import { NavBar } from './types/components/NavBar/NavBar';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <NavBar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="tabs">
            <Route index element={<TabsPage tabs={tabs} />} />
            <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  </>
);
