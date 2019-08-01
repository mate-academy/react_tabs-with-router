import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tabs = ({ tabs, activeTabId }) => (
  <div className="Tabs">
    {tabs.map(tab => (
      <Link
        to={`/tabs/${tab.id}`}
        key={tab.id}
        type="button"
        className={classnames({
          Tabs__Tab: true,
          'Tabs__Tab--active': tab.id === activeTabId,
        })}

      >
        {tab.title}

      </Link>
    ))}

    <p>
      {activeTabId
        ? tabs.find(tab => tab.id === activeTabId).content
        : ''}
    </p>
  </div>

);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  activeTabId: PropTypes.string,
};

Tabs.defaultProps = {
  activeTabId: '',
};

export default Tabs;
