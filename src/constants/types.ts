import { Action as ReduxAction } from 'redux';


export interface InitialState {
  activeTabId: string;
}

export const initialState: InitialState = {
  activeTabId: 'tab-1',
};

export enum ActionType {
  SetActiveTabId,
}

export interface Action<T extends ActionType = ActionType, P = null> extends ReduxAction<T> {
  payload: P;
}

export type SetActiveTabIdAction = Action<ActionType.SetActiveTabId, string>;

export type Actions = (
  SetActiveTabIdAction
);

export interface Tab {
  id: string;
  title: string;
  content: string;
}
