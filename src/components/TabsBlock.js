import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

const TabsBlock = ({
  tabs, activeTab, onTabChange, match,
}) => {
  const { url } = match.match;
  const getIdFromUrl = url.slice(url.length - 5);

  return (
    <div className="TabsBlock">
      <h2>You are in the Right Place</h2>

      <ul className="TabsBlock--tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              name={tab.id}
              onClick={onTabChange}
              className="TabsBlock--tab"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="TabsBlock--content">
        {tabs.some(tab => (tab.id === getIdFromUrl))
          ? (
            <img
              src={tabs.find(tab => (tab.id === getIdFromUrl)).content}
              alt="background"
            />
          )
          : ''
        }
      </div>

      <Link to="/">To Home</Link>
    </div>
  );
};

TabsBlock.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default TabsBlock;
