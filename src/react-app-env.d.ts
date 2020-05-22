// eslint-disable-next-line
/// <reference types="react-scripts" />
interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
  activeTabId: string;

}
