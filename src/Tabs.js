import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tabs = ({
  tabs,
  id,
  onTabSelected,
  match,
}) => {
  const urlId = match.params.id;

  return (
    <>
      <h1>Tabs</h1>
      <div className="tabs-container">
        <ul>
          {tabs.map((tabItem, index) => (
            <li
              key={Date.now() * Math.random()}
              className={
                index === id ? 'tab-item tab-item--selected' : 'tab-item'
              }
            >
              <Link
                onClick={() => onTabSelected(index, urlId)}
                to={`/tabs/${tabItem.id}`}
              >
                {tabItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="tab-content">
        {urlId === tabs[id].id ? `${tabs[id].content} from ${urlId}` : ''}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Tabs;
