import React, { useState, createContext, ReactNode } from 'react';

type TabContextType = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const initialTabContext: TabContextType = {
  selectedTab: '',
  setSelectedTab: () => {},
};

export const TabContext = createContext<TabContextType>(initialTabContext);

type TabContentProps = {
  children: ReactNode;
};

export const TabContent: React.FC<TabContentProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<string>('');

  const contextValue: TabContextType = {
    selectedTab,
    setSelectedTab,
  };

  return (
    <TabContext.Provider value={contextValue}>
      {children}
    </TabContext.Provider>
  );
};
