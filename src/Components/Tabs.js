import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ match }) => {
  const tabs = JSON.parse(localStorage.getItem('tabs'));

  return (
    <div className="tab">
      {tabs.map(tab => (
        <NavLink
          key={tab.id}
          exact
          to={`/tabs/${tab.id}`}
          className="tab__link"
          activeClassName="active"
        >
          {tab.title}
        </NavLink>
      ))}

      {tabs.find(tab => tab.id === `tab-${match.params.id}`)
        && (
          <div className="tab__content-wraper">
            {tabs.find(tab => tab.id === `tab-${match.params.id}`)
              .content}
          </div>
        )
      }
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  match: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
