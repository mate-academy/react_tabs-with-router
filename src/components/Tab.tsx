import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getTabById } from '../App';

export const Tab: React.FC = React.memo(() => {
  const { tabId } = useParams();
  const currentTab = useMemo(() => getTabById(tabId || ''), [tabId]);

  return (
    <h2>{currentTab?.content}</h2>
  );
});
