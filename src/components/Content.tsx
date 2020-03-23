import React, { FC } from 'react';
import './Content.css';

interface Props {
  tab: Tab;
}

export const Content: FC<Props> = ({ tab }) => (
  <div className="content">
    {tab.content}
  </div>
);
