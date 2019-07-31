import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import classnames from 'classnames';
import './tabs.css';

const Tabs = (props) => {
  const {
    tabs,
    match,
    selectedTab,
    handleSelected,
  } = props;

  return (
    <div>
      <h1>{tabs.length} tabs</h1>
      <ul className="tabs">
        {
          tabs.map((tab, index) => (
            <li
              id={tab.id}
              key={Math.random()}
            //  onClick={() => handleSelected(index)}
              className={classnames({
                'tabs__item': true,
                'tabs__item--active': selectedTab === index,
                'active': selectedTab === index,
                })
              }
            >
              <Link to={`${match.url}/${tab.id}`}  onClick={() => handleSelected(index)}> {tab.title} </Link>
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        {tabs[selectedTab].content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs:  PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.number.isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default Tabs;


