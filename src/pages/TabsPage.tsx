import { useParams } from 'react-router-dom';

import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <Tabs
      tabs={tabs}
      selectedTabId={tabId}
    />
  );
};
