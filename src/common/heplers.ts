import { tabs } from './tabs-data';

export function getTabContentById(id: string | undefined): string | undefined {
  return tabs
    .find(tab => tab.id === id)
    ?.content;
}
