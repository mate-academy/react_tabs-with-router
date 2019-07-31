import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TabsBlock from './components/TabsBlock';
import Navigation from './components/Navigation';
import Home from './components/Home';

/* eslint-disable */
const tabsOrigin = [
  { id: 'tab-1', title: 'Tab 1', content: 'https://66.media.tumblr.com/efda219e85d748d312ec889a9e82506d/tumblr_pu02sg6Mvz1v5sy38o1_540.jpg' },
  { id: 'tab-2', title: 'Tab 2', content: 'https://66.media.tumblr.com/0c678736c84473c55e51e8b1d1f8bac3/tumblr_ptqopnHv7P1v5sw1to1_540.jpg' },
  { id: 'tab-3', title: 'Tab 3', content: 'https://66.media.tumblr.com/7159f78ebd170cf5830a10802e37e89b/tumblr_pabwb8WWB71qh0j2do1_540.jpg' },
  { id: 'tab-4', title: 'Tab 4', content: 'https://66.media.tumblr.com/7897dee8d27d58ed8438df092d210d52/tumblr_pvikyxa8Pq1tre3tho1_540.jpg' },
];
/* eslint-disable */

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
              path="/tabs/:tabsId?"
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
