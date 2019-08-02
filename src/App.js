import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Tabs from './Components/Tabs';
import Nav from './Components/Nav';
import Page404 from './Components/Page404';

localStorage.setItem(
  'tabs', JSON.stringify([
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ])
);

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">Home</Route>
        <Route exact path="/tabs/" component={Tabs} />
        <Route exact path="/tabs/tab-:id?" component={Tabs} />
        <Route component={Page404} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
