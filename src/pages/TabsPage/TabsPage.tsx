import { useParams } from 'react-router-dom';
import { Tabs } from '../../components/Tabs/Tabs';

const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabId={tabId} />
    </>
  );
};

export default TabsPage;
