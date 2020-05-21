import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
  activeTabId: (id: string) => void;
};

const Tab: React.FC<Props> = ({ tabs, activeTabId }) => {
  const { tabId } = useParams();
  const currentContent = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    activeTabId(tabId);
  });

  return (
    <div>
      <h3>
        {currentContent?.content}
      </h3>
    </div>
  );
};

export default Tab;
