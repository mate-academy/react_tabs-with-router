import { TabItem } from '../TabItem';

import type { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab | null;
};

export const TabList = ({ tabs, selectedTab }: Props) => {
  return (
    <ul>
      {tabs.map(({ id, title }) => (
        <TabItem
          key={id}
          id={id}
          title={title}
          isActive={selectedTab?.id === id}
        />
      ))}
    </ul>
  );
};
