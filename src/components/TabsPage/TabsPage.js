import React from 'react';
import { Tab } from '../Tab/Tab';

export const TabsPage = ({ match, tabs }) => {
  const currentTabId = match.params.id;

  return (
    <>
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        {tabs.map((tab, i) => (
          <Tab tab={tab} index={i} />
        ))}
      </ul>
      {tabs.some(elem => elem.id === currentTabId) && (
        <p className="tab-content">
          {tabs.find(elem => elem.id === currentTabId).content}
        </p>
      )}
    </>
  );
};
