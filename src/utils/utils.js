export function findSelectedTab(tabs, selectedTabId) {
  return tabs.find(tab => tab.id === selectedTabId);
}
