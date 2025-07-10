import React from 'react';

interface NotFoundProps {
  title: string;
}

export const NotFound: React.FC<NotFoundProps> = ({ title }) => {
  return (
    <>
      <h1 className="title">{title}</h1>
    </>
  );
};
