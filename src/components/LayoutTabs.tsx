import { Outlet } from 'react-router-dom';
import { TabsPage } from './TabsPage';
import { SectionTabs } from './SectionTabs';

export const LayoutTabs: React.FC = () => {
  return (
    <>
      <TabsPage />
      <SectionTabs />
      <Outlet />
    </>
  );
};
