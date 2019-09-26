import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TabsContent from '../TabsContent/TabsContent';

const TabsPage = ({ match, tabs }) => (
  <>
    <h2>Tabs</h2>
    <div className="border-bottom">
      {tabs.map(tab => (
        <NavLink className="link" to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
      ))}
    </div>
    {match.params.userId
      ? (<TabsContent tabs={tabs} currentTabId={match.params.userId} />)
      : null}
  </>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      userId: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default TabsPage;
