import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { TabProps } from '../../constants/proptypes';

import './Tab.css';

const Tab = ({
  id, title, isActive, onClick,
}) => {
  const tabClasses = classNames({
    'tabs-list__item': true,
    'tabs-list__item--active': isActive,
  });

  return (
    <Link to={`/tabs/${id}`}>
      <li
        className={tabClasses}
        key={id}
        onClick={() => onClick(id)}
      >
        {title}
      </li>
    </Link>
  );
};

Tab.propTypes = TabProps;

export default Tab;
