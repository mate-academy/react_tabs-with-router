import React from 'react';
import Tabs from '../Tabs/Tabs';
import { TabsPagePropTypes } from '../../constants/proptypes';

const TabsPage = ({ tabs, currentTabId }) => (
  <>
    <h1>Tabs</h1>
    <Tabs tabs={tabs} />
    {tabs.find(tab => tab.id === currentTabId)
      ? (
        <p>
          {tabs.find(tab => tab.id === currentTabId).content}
        </p>
      ) : (
        <p>No such tab</p>
      )
    }
  </>
);

TabsPage.propTypes = TabsPagePropTypes;

export default TabsPage;
