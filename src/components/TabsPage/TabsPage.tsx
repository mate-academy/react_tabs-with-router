import { Tabs } from '../Tabs/Tabs';
import { tabs } from '../../utils/tabs';

export const TabsPage = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
