import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';

const Tabs = ({ tabs, activeTabId, handleTabSelected }) => (
  <BrowserRouter>
    <h1>Tabs</h1>
    <div className="Tabs">
      {tabs.map((tab, index) => (
        <Link
          to={`/tabs/${tab.id}`}
          key={tab.id}
          type="button"
          className={classnames({
            Tabs__Tab: true,
            'Tabs__Tab--active': index === activeTabId,
          })}
          onClick={() => handleTabSelected(index)}
        >
          {tab.title}
        </Link>
      ))}

      <p>{tabs[activeTabId].content}</p>
    </div>
  </BrowserRouter>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  activeTabId: PropTypes.number.isRequired,
  handleTabSelected: PropTypes.func,
};

Tabs.defaultProps = {
  handleTabSelected: () => {},
};

export default Tabs;
