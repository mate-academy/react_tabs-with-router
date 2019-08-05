import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './components/Main';

class App extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <HashRouter>
          <Nav />
          <Main tabs={tabs} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
