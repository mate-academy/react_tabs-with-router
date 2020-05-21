import React, { FC } from 'react';

interface Prop {
  tab: Tab;
}

export const Tab: FC<Prop> = ({ tab }) => (
  <p>
    {tab.content}
  </p>
);
