import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFound';
import { Layout } from './components/Layout';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <div className="section">
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tabs">
            <Route index element={<Tabs tabs={tabs} />} />
            <Route path=":tabId" element={<Tabs tabs={tabs} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  </div>
);
