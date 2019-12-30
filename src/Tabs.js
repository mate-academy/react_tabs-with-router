import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ tabs }) => (
  <div>
    <ul className="">
      {tabs.map(({ title, id }) => (
        <NavLink
          to={`/tabs/${id}`}
          key={id}
          className=""
        >
          {title}
        </NavLink>
      ))}
    </ul>
  </div>
);

Tabs.propTypes = { tabs: PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
})).isRequired };

export default Tabs;
