import React from 'react';
import propTypes from 'prop-types';
import './tabs.css';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs, match }) => {
  const indexItem = match.params.id;

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
          tabs.map(tab => (
            <li key={tab.id}>
              <Link
                to={`/tabs/${tab.id}`}
                className={addClasess(tab.id)}
              >
                {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        {indexItem
          ? tabs.find(tab => tab.id === indexItem).content
          : <span>Need to choose the tab</span>
        }
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  match: propTypes.objectOf.isRequired,
};

export default Tabs;
