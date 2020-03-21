import React, { FC } from 'react';
import { Tab as TabType } from '../utils/interfaces';

interface Prop {
  tab: TabType;
}

export const Tab: FC<Prop> = ({ tab }) => (
  <p className="subtitle">
    {tab.content}
  </p>
);
