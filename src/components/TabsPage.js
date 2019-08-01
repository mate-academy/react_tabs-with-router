import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';

class TabsPage extends React.Component {
  state = {
    tabs: [
      { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
      { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
      { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;
    const { match } = this.props;

    return (
      <Tabs tabs={tabs} isTab={match.params.isTab} />
    );
  }
}

TabsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default TabsPage;
