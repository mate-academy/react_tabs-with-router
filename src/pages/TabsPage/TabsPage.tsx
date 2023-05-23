import { useParams } from 'react-router-dom';
import { TabsList } from '../../components/TabsList';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[]
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} selectedTabId={tabId} />
    </>
  );
};
