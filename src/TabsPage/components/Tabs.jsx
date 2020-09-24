import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Tabs.css';

export const Tabs = ({ tabs, currentTabId, setId }) => {
  const [text, textChange] = useState(tabs[0].content);

  // const onTabSelected = (content) => {
  //   textChange(content);
  // };
console.log(currentTabId);

  return (
    <>
      <div className="buttons">
        {tabs.map(cell => (
          <Link
            className={classNames('cell', { 'activeTab': cell.id === currentTabId })}
            to={`tabs/${cell.id}`}
          >
            {cell.title}
          </Link>
        ))}
      </div>

      <div className="text">
        <p>
          {text}
        </p>
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentTabId: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
};
