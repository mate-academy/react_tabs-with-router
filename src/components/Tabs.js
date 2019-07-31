/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Tabs extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
    selectedItem: 'tab-1',
    selectedTabText: '',
  };
  
  selectedTab = (event) => {
    const { id } = event.target.dataset;
    const { tabs } = this.state;
    const selectedTab = tabs
      .find(tab => tab.id === id);
    this.setState({
      selectedItem: id,
      selectedTabText: selectedTab.content,
    });
  };
  
  componentDidMount() {
    const { selectedItem, tabs } = this.state;
    const selectedTab = tabs
      .find(tab => tab.id === selectedItem);
    const urlTab = tabs.find(tab => tab.id.includes(window.location.href.slice(-tab.id.length)));
    urlTab !== undefined
      ? this.setState({
        selectedItem: urlTab.id,
        selectedTabText: urlTab.content,
      })
      : this.setState({
        selectedItem: selectedItem,
        selectedTabText: selectedTab.content,
      })
  }

  render() {
    const { tabs } = this.state;
    const { selectedItem, selectedTabText } = this.state;
    const { match } = this.props;
    return (
      <>
      <div className="tabs__head">
        {tabs.map(tab => (
          <Link
            className={`tabs__single-tab
           ${tab.id === selectedItem
              ? 'tabs__single-tab--active'
              : ''}`}
            key={tab.id}
            data-id={tab.id}
            to={`${match.path}/${tab.id}`}
            onClick={this.selectedTab}
          >
            {tab.title}
          </Link>
        ))}
      </div>
      <div className="tabs__body">
        <p>{selectedTabText}</p>
      </div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.array,
};

export default Tabs;
