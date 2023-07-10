import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabsTable } from '../../components/TabsTable';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsTable tabs={tabs} selectedTabId={tabId} />
    </>
  );
};
