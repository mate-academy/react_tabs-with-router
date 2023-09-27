import { useParams } from 'react-router-dom';

import { TabsNav } from '../Components/TabsNav';
import { TabsContent } from '../Components/TabsContent';

export const TabsPage = () => {
  const { tabId } = useParams();
  const normalizedParams = tabId || '';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsNav params={normalizedParams} />

      <TabsContent params={normalizedParams} />
    </>
  );
};
