import React from 'react';
import className from 'classnames';

import { TabTypes } from '../../constants/proptypes';
import './Tab.scss';

const Tab = ({
  title, content, index, isActive, handleTabClick,
}) => (
  <div className="tab">
    <button
      className={className('tab__button', {
        'tab__button--active': isActive,
      })}
      onClick={() => handleTabClick(index)}
      type="button"
    >
      {title}
    </button>
    {isActive && (
      <p className="tab__text">
        {content}
      </p>
    )}
  </div>
);

Tab.propTypes = TabTypes;

export default Tab;
