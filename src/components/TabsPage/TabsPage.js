import React, { Component } from 'react';
import { TabsPageProps } from '../../constants/proptypes';
import Tab from '../Tab/Tab';

import './TabsPage.css';

class TabsPage extends Component {
  state = {
    currentTabId: '',
  };

  onClickTabItem = id => this.setState({ currentTabId: id });

  render() {
    const { currentTabId } = this.state;
    const { tabs, match } = this.props;

    return (
      <div className="tabs">
        <h2>Tabs</h2>
        <ul className="tabs-list">
          {tabs.map(({ id, title, content }) => (
            <Tab
              match={match}
              id={id}
              key={id}
              title={title}
              content={content}
              isActive={id === currentTabId}
              onClick={this.onClickTabItem}
            />
          ))}
        </ul>
        <div className="tab-content">
          {tabs.map(({ id, content }) => {
            if (id !== currentTabId) {
              return undefined;
            }

            return (
              <p
                key={id}
                className="tab-content__item"
              >
                {content}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

TabsPage.propTypes = TabsPageProps;

export default TabsPage;
