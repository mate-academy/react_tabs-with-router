import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { TabsContent } from './components/TabsContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<HomePage />} />

      <Route path="tabs" element={<TabsPage tabs={tabs} />}>
        <Route index element={<p>Please select a tab</p>} />
        <Route path=":tabId" element={<TabsContent />} />
      </Route>

      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
