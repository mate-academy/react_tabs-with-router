import React from 'react';

type Props = {
  title: string;
};

export const PageTitle: React.FC<Props> = React.memo(
  ({ title }) => (
    <h1 className="title">{ title }</h1>
  ),
);
