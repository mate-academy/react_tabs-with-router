import { useContext } from 'react';
import { TabsStateContext } from '../contexts/TabsContext';

export const useTabs = () => {
  const value = useContext(TabsStateContext);

  if (!value) {
    throw new Error('useTabs must be used within a TabsProvider');
  }

  return value;
};
