// eslint-disable-next-line
/// <reference types="react-scripts" />

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  onTabIdSelected: (tabId: string) => void,
  selectedTabId: string | null,
  selectedTab: Tab | null,
};

interface Tab {
  id: string;
  title: string;
  content: string;
}
