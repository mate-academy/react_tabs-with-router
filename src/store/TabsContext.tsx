import React, { ReactNode } from 'react';

export const TabsContext = React.createContext('');

type Props = {
  children: ReactNode;
};

export const TabsContextProvider: React.FC<Props> = ({ children }) => {
  const value = '';

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
