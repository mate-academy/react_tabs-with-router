import React from 'react';
import { useParams } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<Tab['id']>();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      {selectedTab && (
        <p className="title">{selectedTab.content}</p>
      )}
    </>
  );
};
