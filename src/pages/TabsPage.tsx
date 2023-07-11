import { FC } from 'react';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => (
  <div data-cy="TabsComponent">
    <Tabs tabs={tabs} />
  </div>
);
