import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tab = ({ tab, prevPath, changeCurrentTabId }) => (
  <button
    type="button"
    onClick={() => changeCurrentTabId(tab.id)}
  >
    <NavLink to={`${prevPath}/${tab.id}`}>
      {tab.title}
    </NavLink>
  </button>
);

Tab.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  prevPath: PropTypes.string.isRequired,
  changeCurrentTabId: PropTypes.func.isRequired,
};

export default Tab;
