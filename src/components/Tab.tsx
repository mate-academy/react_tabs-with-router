import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getTabId } from '../App';

export const Tab: React.FC = React.memo(() => {
  const { tabId } = useParams();
  const selectedTab = useMemo(() => getTabId(tabId || ''), [tabId]);

  return (
    <p>{selectedTab?.content}</p>
  );
});
