import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, activeId }) => (
  <div>
    {tabs.map(tab => (
      <NavLink
        activeClassName="active-tab"
        className="tab"
        type="button"
        to={`/tabs/${tab.id}`}
        key={tab.id}
      >
        {tab.title}

      </NavLink>
    ))}
    <p>
      {activeId && tabs.find(tab => String(tab.id) === activeId).content}
    </p>

  </div>

);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  activeId: PropTypes.string,
};

Tabs.defaultProps = {
  activeId: '1',
};

export default Tabs;
