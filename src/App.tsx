import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { TabsPage } from './pages/Tabs.page';
import { HomePage } from './pages/Home.page';
import { TabPage } from './pages/Tab.page';
import { Page } from './components/layout/Page';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<HomePage />} />
          <Route path="tabs" element={<TabsPage />}>
            {tabs.map((tab) => (
              <Route
                key={tab.id}
                path={tab.id}
                element={<TabPage />}
              />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};
