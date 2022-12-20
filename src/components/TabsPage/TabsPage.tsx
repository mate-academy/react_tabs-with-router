import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../Tabs/Tabs';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabsId = null } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        selectTabSlug={tabsId}
      />
    </>

  );
};
