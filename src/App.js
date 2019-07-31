import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TabsBlock from './components/TabsBlock';
import Navigation from './components/Navigation';
import Home from './components/Home';

const tabsOrigin = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  { id: 'tab-4', title: 'Tab 4', content: 'Some textsadfasdfasdf 3' },
];

const isLocalTabActual = (localActualTab, tabs) => (
  tabs.some(tab => tab.id === localActualTab) ? localActualTab : ''
);

class App extends React.Component {
  state = {
    tabs: tabsOrigin,
    activeTab: isLocalTabActual(localStorage.activeTab, tabsOrigin),
  };

  onTabChange = (event) => {
    const { name } = event.target;

    localStorage.activeTab = name;

    this.setState({
      activeTab: name,
    });
  }

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <div className="App">
        <Navigation />

        <main className="main">
          {/* eslint-disable-next-line */}
          <h1>{tabs.length} tabs</h1>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/tabs"
              render={match => (
                <TabsBlock
                  tabs={tabs}
                  activeTab={activeTab}
                  onTabChange={this.onTabChange}
                  match={match}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
