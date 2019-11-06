import React from 'react';
import PropTypes from 'prop-types';

class TabContent extends React.PureComponent {
  render = () => (
    <div className="ui bottom attached segment active tab">
      {this.props.tabText}
    </div>
  );
}

TabContent.propTypes = {
  tabText: PropTypes.string.isRequired,
}

export default TabContent;
