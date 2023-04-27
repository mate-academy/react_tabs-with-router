import { Tab } from '../types/Tab';
import { Tabs } from '../components/Tabs';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => (
  <>
    <h1 className="title">Tabs page</h1>

    <Tabs tabs={tabs} />
  </>
);
