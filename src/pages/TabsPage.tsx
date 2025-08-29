import { FC } from 'react';
import { Tab } from '../types/Tab';
import InnerTabs from '../components/InnerTabs';

type Props = {
  tabs: Tab[];
};

const TabsPage: FC<Props> = ({ tabs }) => {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <InnerTabs tabs={tabs} />
      </div>
    </div>
  );
};

export default TabsPage;
