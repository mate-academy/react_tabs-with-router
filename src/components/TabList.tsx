import { useContext } from 'react';
import { TabsContext } from '../store/TabsContext';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from './Tab';

export const TabList = () => {
  const { tabs } = useContext(TabsContext);
  const { tabId } = useParams();

  return (
    <ul>
      {tabs.map(tab => (
        <Tab key={tab.id} tab={tab} tabId={tabId} />
      ))}
    </ul>
  );
};
