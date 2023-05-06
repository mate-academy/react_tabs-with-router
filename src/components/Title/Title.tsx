import React from 'react';

interface Props {
  text: string;
}

export const Title: React.FC<Props> = (props) => (
  <h1 className="title">
    {props.text}
  </h1>
);
