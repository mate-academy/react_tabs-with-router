import { Reducer } from 'redux';

import {
  ActionType,
  InitialState,
  Actions,
  initialState,
} from '../constants/types';


export const reducer: Reducer<InitialState, Actions> = (
  state = initialState, action,
) => {
  switch (action.type) {
    case ActionType.SetActiveTabId:
      return {
        ...state,
        activeTabId: action.payload,
      };
    default:
      return state;
  }
};
