import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabsPage.scss';

import { useParams, Link } from 'react-router-dom';

export const TabsPage = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <ul className="container__list">
        {tabs.map(tab => (
          <>
            <li key={tab.id}>
              <Link
                className={classNames(
                  'container__tab',
                  { 'container__tab--active': tabId === tab.id },
                )}
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          </>
        ))}
      </ul>
      <h2>
        {selectedTab ? selectedTab.content : `Select tab`}
      </h2>
    </div>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

TabsPage.defaultProps = {
  tabs: [],
};
