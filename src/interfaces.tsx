
export interface TabsPropsType {
  tabs: Tab[];
  currentTabId: string;
  componentURL: string;
}

export interface Tab {
  id: string;
  title: string;
  content: string;
}
