/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './tabs.css';

const Tabs = ({ tabs, isTab }) => (
  <>
    <h1>Tabs</h1>

    <div className="tabs">
      {
        tabs.map(item => (
          <div
            key={`${item.id}`}
            className={`${item.id === isTab ? 'select' : ''}`}
          >
            <Tabs.Tab
              title={item.title}
              id={item.id}
            >
              {item.content}
            </Tabs.Tab>
          </div>
        ))
      }
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  isTab: PropTypes.string,
};

Tabs.defaultProps = {
  isTab: 'tab-1',
};

export default Tabs;

Tabs.Tab = ({ title, children, id }) => (
  <>
    <Link
      to={`/tabs/${id}`}
      className="tab--title"
    >
      {title}
    </Link>

    <div
      className="tab--content"
    >
      {children}
    </div>
  </>
);

Tabs.Tab.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.string.isRequired,
};

Tabs.Tab.defaultProps = {
  title: 'Title',
  children: '',
};
