import { Tab } from './types/Tab';

// export function getSelectedTab(
//   copyTabs: Tab[],
//   selectedTabId: string,
// ): Tab | undefined {
//   return copyTabs.find(tab => tab.id === selectedTabId) ?? copyTabs[0];
// }

export function getSelectedTab(tabs: Tab[], selectedTabId: string): Tab | null {
  return tabs.find(tab => tab.id === selectedTabId) ?? null;
}
