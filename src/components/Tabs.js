/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';


class Tabs extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    selectedItem: '',
  };
  
  componentDidMount() {
    this.setState({
      selectedItem: 'tab-1',
    })
  }
  
  findNeededTabContent = () => {
    const { tabs, selectedItem } = this.state;
    return (
      tabs.find(tab => tab.id === selectedItem)
    )
  };
  
  componentDidUpdate(prevProps) {
    if (this.props.match.params.tabId !== prevProps.match.params.tabId) {
      this.setState({
        selectedItem: this.props.match.params.tabId,
      })
    }
  }
  
  

  render() {
    const { tabs, selectedItem } = this.state;
    return (
      <>
      <div className="tabs__head">
        {tabs.map(tab => (
          <Link
            className={`tabs__single-tab
           ${tab.id === selectedItem
              ? 'tabs__single-tab--active'
              : ''}`}
            to={`/tabs/${tab.id}`}
            key={tab.id}
          >
            {tab.title}
          </Link>
        ))}
      </div>
      <div className="tabs__body">
        <p>{this.findNeededTabContent() ? this.findNeededTabContent().content : ''}</p>
      </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
