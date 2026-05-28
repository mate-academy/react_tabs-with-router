import { Tabs } from '../components/Tabs/Tabs';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage = ({ tabs }: Props) => (
  <>
    <h1 className="title">Tabs page</h1>
    <Tabs tabs={tabs} />
  </>
);
