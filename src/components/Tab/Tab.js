import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  tab,
  index,
  handleClick,
  isTabActive,
}) => {
  const { title } = tab;
  const buttonClass = isTabActive
    ? 'tabs__button tabs__button--active'
    : 'tabs__button';

  return (
    <li className="tabs__item">
      <button
        type="button"
        className={buttonClass}
        onClick={() => handleClick(index)}
      >
        {title}
      </button>
    </li>
  );
};

Tab.propTypes = {
  tab: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  isTabActive: PropTypes.bool.isRequired,
};

export default Tab;
