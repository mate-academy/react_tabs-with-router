import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class TabsPage extends React.Component {
  render() {
    const { tabid } = this.props.match.params;
    const { content = 'not found' } = tabs.find(tab => tab.id === tabid) || {};

    return (
      <>
        <Tabs tabs={tabs} tabid={tabid} />
        <div className="ui segment active tab">{content}</div>
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  tabid: PropTypes.string.isRequired,
};

export default TabsPage;
