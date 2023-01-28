import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';
import {
  Navigate, Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { HomePage } from './Components/HomePage';
import { NavBar } from './Components/NavBar';
import { PageNotFound } from './Components/PageNotFound';
import { Tabs } from './Components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <NavBar />

    <div className="section">
      <Routes>
        <Route path="*" element={<PageNotFound />} />

        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />

        <Route
          path="tabs"
        >
          <Route index element={<Tabs tabs={tabs} />} />
          <Route path=":tabId" element={<Tabs tabs={tabs} />} />
        </Route>
      </Routes>
      <div className="container" />
    </div>
  </>
);
