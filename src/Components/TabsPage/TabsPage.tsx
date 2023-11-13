import { Tab } from '../../types/Tab';
import { TabsList } from '../TabsList/TabsList';

interface Props {
  tabs: Tab []
}

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} />
    </>
  );
};
