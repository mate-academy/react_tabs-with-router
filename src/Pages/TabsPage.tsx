import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[]
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabsId = null } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={tabsId}
      />
    </>
  );
};
