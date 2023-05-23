import { FC, memo } from 'react';
import { Tabs } from '../Tabs';

export const TabsPage: FC = memo(() => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs />
    </>
  );
});
