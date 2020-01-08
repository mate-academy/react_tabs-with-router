import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';

class App extends React.Component {
  render() {
    return (
      <div className="App" align="center">
        <Route path="/" render={props => <HomePage />} />
        <Route path="/" render={props => <TabsPage />} />
      </div>
    );
  }
}

export default App;
