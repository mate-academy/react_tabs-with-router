import React, { useRef, memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tab = ({ tab, setActiveTab, tabId }) => {
  const { current: handleClick } = useRef(() => {
    setActiveTab(tab);
  });

  return (
    <Link
      key={tab.id}
      to={`/tabs/${tab.id}`}
      onClick={handleClick}
      className="navbar-item card-header-title"
    >
      <span>{tab.title}</span>
    </Link>
  );
};

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  setActiveTab: PropTypes.func.isRequired,
  tabId: PropTypes.string.isRequired,
};

export default memo(Tab);
