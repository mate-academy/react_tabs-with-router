import React from 'react';
import { useParams, NavLink, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ShowTab } from './ShowTab';

export const TabsPage = ({ tabs }) => {
  // const { tabId } = useParams<{ tabId: string }>();
  // ...
  const { tabId } = useParams();

  return (
    <>
      <h1>Tabs</h1>
      <ul>
        {tabs.map(item => (
          <NavLink
            key={item.id}
            to={`/tabs/${item.id}`}
          >
            {item.title}
          </NavLink>
        ))}

      </ul>

      <Route path="/tabs/:tabId">
        {
          !tabs.some(tab => tab.id === tabId)
            ? <p>Please select a tab</p>
            : <ShowTab item={tabs.filter(tab => tab.id === tabId)} />
        }

      </Route>

    </>
  );
};

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
