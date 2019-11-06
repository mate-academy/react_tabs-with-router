import React from 'react';
import TabContent from '../tabContent/TabContent';
import TabLink from '../tabLink/TabLink';
import { Switch, Route } from 'react-router-dom';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tabs: this.props.tabs,
      activeTabId: null,
    };
  }

  isActiveMenuItem = (event) => {
    const clickMenyItem = this.state.tabs.find(tab => tab.title === event.target.textContent);

    this.setState((prevState) => {
      const prevActiveMenuItem = prevState.tabs.find(tab => tab.id === prevState.activeTabId);

      if (clickMenyItem !== prevActiveMenuItem) {
        return ({
          activeTabId: clickMenyItem.id,
        });
      }
    });
  }

  render() {
    const { tabs, activeTabId } = this.state;
    const activeTab = tabs.find(tab => tab.id === activeTabId);

    return (
      <>
        <div className="ui attached tabular menu" onClick={this.isActiveMenuItem}>
          {tabs.map(tab => <TabLink key={tab.title} tab={tab} activeTabId={activeTabId} />)}
        </div>
        <Switch>
          {tabs.map(tab => <Route path={`/tabs/${tab.id}`} render={() => <TabContent tabText={tab.content} />} />)}
        </Switch>
      </>
    );
  }
}

export default Tabs;
