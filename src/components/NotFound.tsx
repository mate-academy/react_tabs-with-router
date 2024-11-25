import React from 'react';

interface Props {}

export const NotFound: React.FC<Props> = () => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Page not found</h1>
      </div>
    </div>
  );
};
