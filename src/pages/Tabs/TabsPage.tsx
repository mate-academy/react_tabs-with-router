import { Tabs } from '../../components/Tabs';
import { Tab } from '../../types/Tab';

export const TabsPage = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} />
    </>
  );
};
