import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[]
};

export const TabsList: React.FC<Props> = ({ tabs }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <TabItem key={tab.id} tab={tab} />
      ))}
    </ul>
  </div>
);
