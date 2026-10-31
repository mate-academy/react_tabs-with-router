import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Tabs } from './components/Tabs';
import { Layout } from './components/Layout';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />}></Route>
      <Route element={<Layout />}>
        <Route index element={<h1 className="title">Home page</h1>}></Route>
        <Route path="tabs" element={<Tabs tabs={tabs} />}>
          <Route path=":tabId" element={<Tabs tabs={tabs} />}></Route>
        </Route>
        <Route
          path="*"
          element={<h1 className="title">Page not found</h1>}
        ></Route>
      </Route>
    </Routes>
  );
};
