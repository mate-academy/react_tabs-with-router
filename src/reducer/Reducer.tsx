/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer } from 'react';

type Action = { type: 'setTab'; currentTab: string | '' };

interface State {
  tab: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'setTab':
      return {
        ...state,
        tab: action.currentTab,
      };

    default:
      return state;
  }
};

const initialState: State = {
  tab: '',
};

export const StateContext = React.createContext(initialState);
export const DispatchContext = React.createContext((_action: Action) => {});

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
