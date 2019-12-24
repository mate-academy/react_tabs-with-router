import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Tabs from './Tabs';
import Navigation from './Navigation';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/tabs/:tabId?" component={TabsPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
);

const HomePage = () => (
  <>
    <h1 className="tab-list__title">Home</h1>
    <Navigation />
  </>
);
const TabsPage = ({ match }) => (
  <>
    <h1 className="tab-list__title">Tabs</h1>
    <Navigation />
    <Tabs tabs={tabList} currentTabId={match.params.tabId} />
  </>
);

const tabList = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

TabsPage.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default App;
