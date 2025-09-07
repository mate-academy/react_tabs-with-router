import * as React from 'react';

type TabProps = {
  id: string;
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};
