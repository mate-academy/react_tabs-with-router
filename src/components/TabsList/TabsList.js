import React, { Component } from 'react';
import shortid from 'shortid';
import { TabsListTypes } from '../../constants/proptypes';
import './TabsList.scss';
import Tab from '../Tab/Tab';

export default class Tabs extends Component {
  state = {
    currentTabId: '',
  };

  handleTabClick = (index) => {
    this.setState({ currentTabId: index });
  };

  render() {
    const { tabs } = this.props;

    return (
      <div className="tabs">
        {tabs.map((tab, i) => (
          <Tab
            key={shortid.generate()}
            title={tab.title}
            content={tab.content}
            index={`tab-${i + 1}`}
            isActive={`tab-${i + 1}` === this.state.currentTabId}
            handleTabClick={this.handleTabClick}
          />
        ))}
      </div>
    );
  }
}

Tabs.propTypes = TabsListTypes;
