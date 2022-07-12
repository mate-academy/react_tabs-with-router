import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

export const Tab: React.FC = () => {
  const { id } = useParams<string>();

  const currentTab = tabs.find(tab => tab.id === id);

  return (
    <p>
      {currentTab ? (
        currentTab.content
      ) : (
        'Please select a tab'
      )}
    </p>
  );
};
