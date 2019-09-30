import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import TabsContent from '../TabsContent/TabsContent';

const TabsPage = ({ userId, tabs }) => (
  <>
    <h2>Tabs</h2>
    <div className="border-bottom">
      {tabs.map(tab => (
        <NavLink className="link" to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
      ))}
    </div>
    {userId
      ? (
        <TabsContent
          currentTabContent={tabs.find(tab => tab.id === userId).content}
        />
      )
      : null}
  </>
);

TabsPage.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  ).isRequired,
  userId: PropTypes.string.isRequired,
};

export default TabsPage;
