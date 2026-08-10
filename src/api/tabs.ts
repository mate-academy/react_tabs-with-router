export interface Tab {
  id: string;
  title: string;
  content: string;
}

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some content 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some content 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some content 3' },
];
