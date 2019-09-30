import React, { Component } from 'react';
import Tabs from './Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export default class TabsPage extends Component {
  state = {
    tabs,
  }

  render() {
    return (
      <>
        <h1>Tabs</h1>
        <Tabs tabs={this.state.tabs} />
      </>
    );
  }
}
