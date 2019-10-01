import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, tabid }) => (
  <>
    <div className="ui pointing secondary menu">
      {tabs.map((item, i) => (
        <Link
          to={`/tabs/${item.id}`}
          className={tabid === item.id ? 'active item' : 'item'}
        >
          {item.title}
        </Link>
      ))}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  tabid: PropTypes.string.isRequired,
};

export default Tabs;
