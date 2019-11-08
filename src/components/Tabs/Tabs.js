import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';
import Content from '../Content/Content';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabIndex: 0,
    };

    this.onTabSelected = this.onTabSelected.bind(this);
  }

  onTabSelected(index) {
    this.setState(state => ({
      ...state,
      activeTabIndex: index,
    }));
  }

  render() {
    const { tabs } = this.props;
    const { activeTabIndex } = this.state;

    return (
      <>
        <div className="ui attached tabular menu">
          {tabs.map((tab, index) => (
            <Tab
              click={() => this.onTabSelected(index)}
              title={tab.title}
              key={tab.title}
              index={index}
              activeTabIndex={activeTabIndex}
            />
          ))}
        </div>
        <Content tabs={tabs} index={activeTabIndex} />
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,
};

export default Tabs;
