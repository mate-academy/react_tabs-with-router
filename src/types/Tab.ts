import { SetStateAction } from 'react';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

export type TabsProps = {
  tabs: Tab[];
  activeTabId: string | null;
  onTabSelected: React.Dispatch<SetStateAction<string | null>>;
};
