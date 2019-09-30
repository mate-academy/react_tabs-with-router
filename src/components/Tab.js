import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tab = ({ tab }) => (
  <li>
    <NavLink className="button" to={`/tabs/${tab.id}`}>
      {tab.title}
    </NavLink>
  </li>
);

const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

Tab.propTypes = {
  tab: shape.isRequired,
};

export default Tab;
