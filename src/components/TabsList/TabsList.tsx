import { TabItem } from '../TabItem/TabItem';
import tabs from '../../api/tabs.json';

export const TabsList: React.FC = () => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <TabItem
          key={tab.id}
          tab={tab}
        />
      ))}
    </ul>
  </div>
);
