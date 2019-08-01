import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './tabs.css';

const Tabs = (props) => {
  const {
    tabId,
    tabs,
  } = props;

  return (
    <div>
      <h1>{tabs.length} tabs</h1>
      <ul className="tabs">
        {
          tabs.map(tab => (
            <li
              id={tab.id}
              key={tab.id}
              className={classnames({
                'tabs__item': true,
                'tabs__item--active': tab.id === tabId,
                'active': tab.id === tabId,
                })
              }
            >
              <Link to={`/tabs/${tab.id}`}>
                  {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        {tabId ? tabs.find(tab => tab.id === tabId).content : <h6>Make your choice!</h6>}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs:  PropTypes.arrayOf(PropTypes.object).isRequired,
  tabId: PropTypes.string,
};

export default Tabs;


