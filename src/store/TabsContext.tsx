import { createContext } from 'react';

type Props = {
  children: React.ReactNode;
};

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabContext = createContext(tabs);

export const TabContextProvider: React.FC<Props> = ({ children }) => {
  return <TabContext.Provider value={tabs}>{children}</TabContext.Provider>;
};
