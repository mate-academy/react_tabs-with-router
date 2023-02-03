import { memo } from 'react';
import { Tab } from '../../types/Tab';
import { TabsList } from '../TabsList/TabsList';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = memo(({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} />
    </>
  );
});
