import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({ children, tabs }) => (
  <section className="tabs">
    {tabs.map(item => (
      <NavLink
        to={item.id}
        key={item.title}
        className="tabs__button"
        activeClassName="tabs__button--is-active"
      >
        {item.title}
      </NavLink>
    ))}
    <hr className="tabs__decor" />
    <p className="tabs__text">
      {children}
    </p>
  </section>
);

Tabs.propTypes = {
  children: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tabs;
