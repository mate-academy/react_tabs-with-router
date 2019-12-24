import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const SelectPage = () => (
  <section className="section_pages-select">
    <NavLink
      to="/"
      exact
      className="pages"
      activeClassName="selected_page"
    >
        Home
    </NavLink>
    <NavLink
      to="/tabs"
      exact
      className="pages"
      activeClassName="selected_page"
    >
        Tabs
    </NavLink>
  </section>
);

export default SelectPage;
