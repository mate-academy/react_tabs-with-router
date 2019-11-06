import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class TabLink extends React.PureComponent {
  render() {
    const { tab: { title, id }, activeTabId } = this.props;
    const className = id === activeTabId ? 'active item' : 'item';

    return (
      <NavLink to={`/tabs/${id}`} className={className}>{title}</NavLink>
    );
  }
}

TabLink.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabLink;
