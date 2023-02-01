import React, { memo } from 'react';
import { Tabs } from '../Tabs/Tabs';

export const TabsPage: React.FC = memo(() => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs />
    </>
  );
});
