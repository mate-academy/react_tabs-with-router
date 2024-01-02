import { TabList } from '../components/TabsList/TabsList';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <TabList tabs={tabs} />
    </div>
  );
};
