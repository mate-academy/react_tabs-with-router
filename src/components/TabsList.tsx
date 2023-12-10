import { tabsData } from '../utils/tabsData';
import TabHeader from './TabHeader';

interface Props {
  selectedTab: string;
}
export default function TabsList({ selectedTab }: Props) {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabsData.map(tab => (
          <TabHeader
            tab={tab}
            selectedTab={selectedTab}
            key={tab.id}
          />
        ))}
      </ul>
    </div>
  );
}
