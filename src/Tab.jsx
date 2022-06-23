import React from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from './tabs';

export const Tab = () => {
  const { id } = useParams();
  const currentTab = tabs.filter(tab => (tab.id === id));

  return (
    <p>{currentTab.length ? currentTab[0].content : 'Please select a tab'}</p>
  );
};
