import { FC } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App:FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="container has-text-centered">
              <h2 className="title is-size-1">
                Home Page
              </h2>
            </div>
          )}
        />
        <Route path="tabs" element={<Tabs tabs={tabs} />}>
          <Route
            path=":tabId"
            element={<Outlet />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
