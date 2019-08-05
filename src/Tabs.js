import React from 'react';
import propTypes from 'prop-types';
import './tabs.css';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs, match }) => {
  const indexItem = match.params.id;
  const tabChoose = tabs.find(tabItem => tabItem.id === indexItem);
  const tab = (indexItem && tabChoose)
    ? tabChoose.content
    : 'Need to choose the tab';

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
          tabs.map(tabItem => (
            <li key={tabItem.id}>
              <Link
                to={`/tabs/${tabItem.id}`}
                className={addClasess(tabItem.id)}
              >
                {tabItem.title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        <span>{tab}</span>
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  match: propTypes.objectOf.isRequired,
};

export default Tabs;
