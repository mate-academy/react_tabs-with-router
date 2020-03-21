import React, { FC } from 'react';
import './Content.css';

type Props = {
  text: string;
};

export const Content: FC<Props> = ({ text }) => (
  <div className="tabs__content">
    {text}
  </div>
);
