import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const TabsBlock = ({ tabs, params }) => {
  const { tabId } = params;
  const src = tabs.find(tab => (tab.id === tabId));

  return (
    <div className="TabsBlock">
      <h2>You are in the Right Place</h2>

      <ul className="TabsBlock--tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              name={tab.id}
              className="TabsBlock--tab"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="TabsBlock--content">
        {src ? (
          <img
            src={src.content}
            alt="background"
          />
        ) : ''
        }
      </div>

      <Link to="/">To Home</Link>
    </div>
  );
};

TabsBlock.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  params: PropTypes.shape({ tabId: PropTypes.string }).isRequired,
};

export default TabsBlock;
