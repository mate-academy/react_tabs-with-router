import React from 'react';
import { NavLink } from 'react-router-dom';

function Tab(props) {
  const { tabs, match } = props;

  return (
    tabs.map(tab => (
      <ul>
        <NavLink className="tab" to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
        { tab.id === match.params.id
          ? <p>{tab.content}</p>
          : undefined}
      </ul>
    ))
  );
}

export default Tab;
