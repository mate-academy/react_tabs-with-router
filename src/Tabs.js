import React from 'react';
import propTypes from 'prop-types';
import './tabs.css';
import { Link } from 'react-router-dom';

const Tabs = ({
  tabs, onTabSelected, indexItem, match,
}) => {
  const addClasess = indexTab => (
    (indexTab === indexItem)
      ? 'tabs__item tabs__item--active'
      : 'tabs__item'
  );

  return (
    <>
      <h2>{`${tabs.length} tabs`}</h2>
      <ul className="tabs">
        {
          tabs.map((tab, index) => (
            <li
              key={tab.id}
            >
              <Link
                to={`${match.path}/${tab.id}`}
                className={addClasess(index)}
                onClick={() => onTabSelected(index)}
              >
                {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        {tabs[indexItem].content}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  onTabSelected: propTypes.func.isRequired,
  indexItem: propTypes.number.isRequired,
  match: propTypes.objectOf.isRequired,
};

export default Tabs;
