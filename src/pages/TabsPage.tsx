import { useContext } from 'react';
import { TabContext } from '../TabContext';
import { Tabs } from '../components/Tabs';

export const TabsPage = () => {
  const tabContext = useContext(TabContext);

  if (!tabContext) {
    return;
  }

  const { tabs } = tabContext;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} />
    </>
  );
};
