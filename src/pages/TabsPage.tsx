import { useParams, useLocation } from 'react-router-dom';
import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();
  const location = useLocation();
  const shouldShowActiveTab = !(location.pathname === '/tabs' && !tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} activeTabId={shouldShowActiveTab ? tabId : undefined} />
    </>
  );
};
