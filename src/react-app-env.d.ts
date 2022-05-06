// eslint-disable-next-line
/// <reference types="react-scripts" />

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTab: Tab | null,
};

interface Tab {
  id: string;
  title: string;
  content: string;
}
