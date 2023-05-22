import { FC, memo } from 'react';
import { Tab } from '../../types/Tab';
import { TabsList } from '../TabsList';

type Props = {
  tabs: Tab[];
};

export const TabsPage: FC<Props> = memo(({ tabs }) => (
  <>
    <h1 className="title">Tabs page</h1>
    <TabsList tabs={tabs} />
  </>
));
