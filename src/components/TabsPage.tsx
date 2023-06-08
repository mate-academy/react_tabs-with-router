import { useParams } from 'react-router-dom';
import TabsList from './TabsList';
import TabContent from './TabContent';

export const TabsPage = () => {
  const { selectedTab } = useParams();

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <TabsList selectedTab={selectedTab || ''} />
      <TabContent selectedTab={selectedTab || ''} />
    </div>
  );
};
