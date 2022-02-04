import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Tabs from './Tabs';
import Tab from './Tab';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tabs" element={<Tabs />}>
          <Route
            index
            element={(
              <main>
                <p>Select a Tab!!</p>
              </main>
            )}
          />
          <Route path=":tabId" element={<Tab />} />
        </Route>
        <Route path="home" element={<h1>Home Page</h1>} />
        <Route
          path="*"
          element={(
            <main>
              <p>There is nothing here!</p>
            </main>
          )}
        />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
