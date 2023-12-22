import { Tabs } from '../Components/Tabs';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
}
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
