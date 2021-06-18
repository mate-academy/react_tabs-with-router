import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';

export const TabsPage = ({ tabs }) => {
    const { tabId } = useParams();

    const currentTab = useMemo(() => (
        tabs.find(tab => tab.id === tabId)
      ), [tabId]);

      return (
        <>
        <h1 className="title">Tabs Page</h1>
  
        <div>
          <ul className = "nav nav-tabs">
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classnames('nav-link',
                  {'active': tab.id === tabId,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
  
        <p>
          {currentTab ? (
            currentTab.content
          ) : (
            'Please select a tab'
          )}
        </p>
      </>
      );
};

TabsPage.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string,
        content: PropTypes.string,
      }),
    ),
  };
  
  TabsPage.defaultProps = {
    tabs: [],
  };