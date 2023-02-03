import { FC } from 'react';
import { Tabs } from '../../components/Tabs/Tabs';

export const TabsPage: FC = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <Tabs />
      </div>
    </div>
  );
};
