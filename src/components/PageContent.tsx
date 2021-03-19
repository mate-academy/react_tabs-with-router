import React from 'react';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

export const PageContent = (props: { selectedTab: Tab | undefined }) => {
  const { selectedTab } = props;

  return (
    <div className="emoji">
      {!selectedTab ? <p>Please select a tab</p> : String.fromCodePoint(+selectedTab.content)}
    </div>
  );
};
