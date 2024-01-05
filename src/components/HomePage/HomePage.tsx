import React, { useEffect } from 'react';

export const HomePage: React.FC = () => {
  // eslint-disable-next-line no-console
  useEffect(() => console.log('asas'), []);

  return (
    <div className="section">
      <h1 className="title homepage">Home page</h1>
    </div>
  );
};
