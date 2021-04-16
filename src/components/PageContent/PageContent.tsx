import React from 'react';
import { Tab } from '../../typeScript'

export const PageContent = (props: { selectedTab: Tab | undefined }) => {
  const { selectedTab } = props;
  console.log(selectedTab)

  return (
    <div className="box">
      <div className="subtitle is-2">
        {!selectedTab ? <p>Please select a tab</p> : selectedTab.content}
      </div>
    </div>
  );
};