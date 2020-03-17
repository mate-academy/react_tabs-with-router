import { ActionType, SetActiveTabIdAction } from '../constants/types';


export const setActiveTabId = (activeTabId: string): SetActiveTabIdAction => ({
  type: ActionType.SetActiveTabId,
  payload: activeTabId,
});
