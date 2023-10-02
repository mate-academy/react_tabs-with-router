import React, { useReducer, Dispatch } from 'react';

export enum ACTIONS {
  SET_CONTENT,
}

type Action = { type: ACTIONS.SET_CONTENT, payload: string };

interface Data {
  content: string,
}

function reducer(state: Data, action: Action): Data {
  switch (action.type) {
    case ACTIONS.SET_CONTENT:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
}

type State = {
  state: Data,
  dispatch: Dispatch<Action>,
};

const initailState: State = {
  state: {
    content: '',
  },
  dispatch: () => { },
};

export const StateContext = React.createContext(initailState);

type Props = {
  children: React.ReactNode;
};

export const TabProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState.state);

  return (
    <StateContext.Provider value={{
      state: {
        ...state,
      },
      dispatch,
    }}
    >
      {children}
    </StateContext.Provider>
  );
};
