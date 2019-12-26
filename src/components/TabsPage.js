import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import TabContent from './TabContent';

const TabsPage = ({ tabs }) => {
  const header = (
    <ul className="list-group list-group-horizontal">
      {tabs.map(({ id, title }) => (
        <li className="list-group-item" key={title}>
          <NavLink to={`/tabs/${id}`}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1>TABS</h1>
      {header}
      <TabContent />
    </div>
  );
};

export default TabsPage;

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};
