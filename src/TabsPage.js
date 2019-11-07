import React, { Component } from 'react';
import Tab from './Tab';

class TabsPage extends Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    currentTabId: '',
  }

  changeCurrentTabId = (tabId) => {
    this.setState({
      currentTabId: tabId,
    });
  }

  render() {
    const { tabs, currentTabId } = this.state;

    return (
      <>
        <div>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              changeCurrentTabId={this.changeCurrentTabId}
            />
          ))}
        </div>
        <div>
          {
            currentTabId
              ? tabs.find(tab => tab.id === currentTabId).content
              : ''
          }
        </div>
      </>
    );
  }
}

export default TabsPage;
