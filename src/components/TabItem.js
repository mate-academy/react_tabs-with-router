import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const TabItem = ({ tabs, selectedId }) => (
  <div className="tab-form">
    {tabs.map(tab => (
      <li className={classnames({
        dropdown: true,
        active: tab.id === selectedId,
      })}
      >
        <Link
          to={`/tabs/${tab.id}`}
          key={tab.id}
          type="button"
          className="dropdown-toggle"
        >
          {tab.title}
        </Link>
      </li>
    ))}

  </div>

);

TabItem.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  selectedId: PropTypes.number.isRequired,
};

export default TabItem;
