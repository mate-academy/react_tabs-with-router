import React, {
  useMemo,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { Tab } from '../types/Tab';

// Define the context type
type TabContextType = {
  currentTab: Tab | null;
  setCurrentTab: Dispatch<SetStateAction<Tab | null>>;
};

// Initialize the context with the correct types
export const TabContext = React.createContext<TabContextType>({
  currentTab: null,
  setCurrentTab: () => {},
});

type Props = {
  children: ReactNode;
};

export const TabProvider: React.FC<Props> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);
  const value = useMemo(
    () => ({
      currentTab,
      setCurrentTab,
    }),
    [currentTab],
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
