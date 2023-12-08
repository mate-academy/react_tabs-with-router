import React from 'react';
import { Tabs } from '../components/Tabs';

export const TabsPage: React.FC = () => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="section">
        <div className="container">
          <Tabs />
        </div>
      </div>
    </div>
  );
};
