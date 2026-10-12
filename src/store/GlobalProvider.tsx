import React from 'react';
import { Tab } from '../types/Tab';

type State = {
  tabs: Tab[];
};

export const initialState: State = {
  tabs: [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ],
};

const StateContext = React.createContext<State>(initialState);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(StateContext);
