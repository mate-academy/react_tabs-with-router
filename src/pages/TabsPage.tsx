import { useParams } from 'react-router-dom';

import { TabsContent } from '../components/TabsContent';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsContent
        tabs={tabs}
        selectedTabId={tabId}
      />
    </>
  );
};
