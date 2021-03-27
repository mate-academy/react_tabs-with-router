import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const TabsPage = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed is-info">
        <ul>
          {tabs.map(tab => (
            <li key={tab.id}>
              <NavLink activeClassName="is-active" to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <p className="content is-medium">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'
        }
      </p>
    </>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
