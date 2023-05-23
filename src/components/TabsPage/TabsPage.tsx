import React from 'react';
import { Tabs } from '../Tabs';
import { tabs } from '../../api/tabs';

export const TabsPage: React.FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
