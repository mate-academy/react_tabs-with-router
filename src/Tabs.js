import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './App.css';

const Tabs = ({ tabs, currentTabId }) => {
  const isCurrentTabValid = tabs.find(tab => tab.id === currentTabId);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        {tabs.map(tab => (
          <Nav.Item key={tab.id}>
            <NavLink
              className="nav-link"
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </Nav.Item>
        ))}
      </Nav>
      <p>
        {isCurrentTabValid ? isCurrentTabValid.content : ''}
      </p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  currentTabId: PropTypes.string,
};

Tabs.defaultProps = {
  currentTabId: '',
};

export default Tabs;
