import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { TabList } from '../TabList';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabList tabs={tabs} />
    </>
  );
};
