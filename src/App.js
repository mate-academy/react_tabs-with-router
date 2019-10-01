import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TabsPage from './components/TabsPage/TabsPage';
import './App.css';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route path="/" component={HomePage} />
      <Route path="/tabs/:tabid?" component={TabsPage} />
    </BrowserRouter>
  </div>
);

export default App;
