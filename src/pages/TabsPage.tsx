import { tabs } from '../App';
import { TabsList } from '../Components/TabsList';

export const TabsPage: React.FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList tabs={tabs} />
    </>
  );
};
