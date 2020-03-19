import React, { FC } from 'react';

interface Props {
  tab: Tab;
}
export const Tab: FC<Props> = ({ tab }) => (
  <p className="tab-text">{tab.content}</p>
);
