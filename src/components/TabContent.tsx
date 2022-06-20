import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabContent:React.FC<Props> = ({ tabs }) => {
  const { tabsId } = useParams<{ tabsId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabsId);

  return (
    <p>
      {selectedTab ? selectedTab.content : 'Please select tab' }
    </p>
  );
};
