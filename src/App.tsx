import React from 'react';
import Tabs from './Tabs';

import './App.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    activeTabIndex: 0,
  };

  // onTabSelected = (id) => {
  //   this.setState({ activeTabIndex: id });
  // };

  render() {
    const { activeTabIndex } = this.state;

    return (
      <>
        <h1>React tabs</h1>
        {/* <Tabs
          // tabs={tabs}
          activeTabIndex={activeTabIndex}
          onSelect={this.onTabSelected}
        /> */}
      </>
    );
  }
}

export default App;
