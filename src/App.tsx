import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePages } from './Page/HomePages';
import { TabsPages } from './Page/TabsPages';
import { NotPages } from './Page/NotPages';
import { Navigation } from './components/Navigation';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePages />} />

            <Route path="home" element={<Navigate to="/" replace />} />

            <Route path="/tabs">
              <Route index element={<TabsPages tabs={tabs} />} />

              <Route path=":tabId" element={<TabsPages tabs={tabs} />} />
            </Route>

            <Route path="*" element={<NotPages />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
