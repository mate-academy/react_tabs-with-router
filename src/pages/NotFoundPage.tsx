import React from 'react';

export const NotFoundPage: React.FC = () => {
  document.title = 'Page not found';

  return (
    <div className="page">
      <h1 className="title">Page not found</h1>
    </div>
  );
};
