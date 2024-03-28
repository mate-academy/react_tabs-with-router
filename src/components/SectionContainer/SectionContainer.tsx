import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const SectionContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="section">
      <div className="container">{children}</div>
    </div>
  );
};
