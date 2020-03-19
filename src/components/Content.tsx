import React, { FC } from 'react';
import './Content.css';

interface Props {
  tab: Tab;
}

export const Content: FC<Props> = ({ tab }) => (
  <div className="tab__content">
    {tab.content}
  </div>
);
