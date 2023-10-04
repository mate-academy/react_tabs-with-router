import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './components/Home';
import { PageNotFound } from './components/PageNotFound';
import { TabsList } from './components/TabsList';

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
            <Route index element={<TabsList tabs={tabs} />} />
            <Route path=":tabId" element={<TabsList tabs={tabs} />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </div>
  </div>
);
