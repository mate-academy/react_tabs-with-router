import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  click,
  title,
  activeTabIndex,
  index,
}) => (
  <button
    className={
      activeTabIndex === index
        ? 'active item'
        : 'item'
    }
    type="button"
    onClick={click}
  >
    {title}
  </button>
);

Tab.propTypes = {
  click: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  activeTabIndex: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default Tab;
