import { Tab } from '../../types/Tab';
import { Tabs } from '../Tabs/Tabs';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
