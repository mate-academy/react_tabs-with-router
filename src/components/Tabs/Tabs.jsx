import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs Page</h1>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li>
              <NavLink
                to={`/tabs/${tab.id}`}
                className="navbar-item is-tab"
                activeClassName="is-active"
              >
                {tab.title}
              </NavLink>
              <h3>{tabId === tab.id && tab.content}</h3>
            </li>

          ))}
        </ul>
      </div>
      <h2 className="title">{!tabId && 'Please select a tab'}</h2>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
