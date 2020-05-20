import React from 'react';
import Tabs from './Tabs';

import tabs from '../api/tabs';
import posts from '../api/posts';

const preparedTabs = tabs.map(tab => ({
  ...tab,
  post: posts.find(post => post.id === tab.content),
}));

const TabsPage = () => (
  <>
    <h2 className="ui brown header page__title">Posts page</h2>
    <Tabs tabs={preparedTabs} />
  </>
);

export default TabsPage;
