import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.css';
import Tab from '../Tab/Tab';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleClick = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const { tabs } = this.props;
    const { handleClick } = this;
    const { activeTab } = this.state;
    let isTabActive = false;

    return (
      <div>
        <ul className="tabs">
          {tabs.map((tab, index) => {
            isTabActive = activeTab === index;

            return (
              <Tab
                isTabActive={isTabActive}
                tab={tab}
                index={index}
                handleClick={handleClick}
                key={`${tab.title}-key`}
              />
            );
          })}
        </ul>
        <div className="tabs__content">
          {tabs[activeTab].content}
        </div>
      </div>
    );
  }
}

Tabs.defaultProps = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      content: 'No content!',
    })
  ),
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired
  ),
};

export default Tabs;
