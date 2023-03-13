import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import {
  Navigate, Route, Routes, useMatch,
} from 'react-router-dom';
import { HomePage } from './HomePage.tsx/HomePage';
import { TabsPage } from './TabsPage/TabsPage';
import { Nav } from './Nav/Nav';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const match = useMatch('/tabs/:tabId');
  const tabId = match?.params.tabId || '';

  return (
    <>
      <Nav />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="tabs">
              <Route
                index
                element={(
                  <TabsPage
                    tabs={tabs}
                    tabId={tabId}
                  />
                )}
              />
              <Route
                path=":tabId"
                element={(
                  <TabsPage
                    tabs={tabs}
                    tabId={tabId}
                  />
                )}
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />

          </Routes>
        </div>
      </div>
    </>
  );
};
