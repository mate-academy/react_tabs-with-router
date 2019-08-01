import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tabs = ({
  tabs, activeTab, selectedTab, match,
}) => {
  const url = match.params.id;

  return (
    <>
      <div className="tabs">
        {
          tabs.map((tab, index) => (
            <button
              type="button"
              className="tabs__button"
            >
              <Link
                onClick={() => selectedTab(index, url)}
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </button>
          ))
        }
      </div>
      <div className="tabs__content">
        {url === tabs[activeTab].id ? `${tabs[activeTab].content}` : ''}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  match: propTypes.string.isRequired,
  selectedTab: propTypes.func.isRequired,
  activeTab: propTypes.number.isRequired,
};

export default Tabs;
