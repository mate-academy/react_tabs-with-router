import React from 'react';
import { Link } from 'react-router-dom';

const TabLink = ({ link, title, activeTab, id, selectTab }) => {
  const activeStyle = activeTab === id
  ? 'item active'
  : 'item';

  return (
    <Link to={link} className={activeStyle} onClick={() => selectTab(id)}>{title}</Link>
  )
}

export default TabLink;
