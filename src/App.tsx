import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Home } from './Home';
import { TabsPage } from './TabsPage';
import { PageNotFound } from './PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <NavBar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Navigate to="/" />} />

      <Route path="tabs">
        <Route index element={<TabsPage tabs={tabs} />} />
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);
