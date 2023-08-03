import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import {
  Navigate, Route, Routes, useLocation,
} from 'react-router-dom';
import './App.scss';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { NotFound } from './components/NotFound';
import { Navigation } from './components/Navigation';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const { pathname } = useLocation();

  if (pathname === '/home') {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navigation />

      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs" element={<Tabs tabs={tabs} />}>
            <Route index element={<Tabs tabs={tabs} />} />
            <Route path=":tabId" element={<Tabs tabs={tabs} />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
