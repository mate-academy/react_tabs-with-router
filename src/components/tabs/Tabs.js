import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Tabs = ({ match, tabs }) => {
  const tab = tabs.find(item => item.id === match.params.tabId);

  return (
    <>
      <div className="ui attached tabular menu">
        {tabs.map(({ title, id }) => (
          <NavLink
            key={id}
            to={`/tabs/${id}`}
            activeClassName="active item"
            className="item"
          >
            {title}
          </NavLink>
        ))}
      </div>
      <div className="ui bottom attached segment active tab">
        {tab && tab.content}
      </div>
    </>
  );
};

Tabs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Tabs;
