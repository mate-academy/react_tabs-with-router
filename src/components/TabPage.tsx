import React from 'react';
// import { useMatch } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Tabs } from './Tabs';

type Props = {
  tabs: Tab[],
};

export const TabPage: React.FC<Props> = ({ tabs }) => (
  <>
    <h1 className="title">Tabs page</h1>
    <Tabs
      tabs={tabs}
    />
  </>
);
