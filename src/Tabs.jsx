import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({ tabs, activeTabIndex, onSelect }) => (
  <div className="tabs">
    {tabs.map(tab => (
      <button
        type="button"
        tabIndex={tab.id}
        className={classNames('tab', { active: tab.id === activeTabIndex })}
        key={tab.id}
        onClick={() => onSelect(tab.id)}
      >
        {tab.title}
      </button>
    ))}
    <p className="tabs__content">{tabs[activeTabIndex].content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  activeTabIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Tabs;
