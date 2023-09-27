import { Tab } from '../types/Tab';
import { TabsListItem } from './TabListItem';

interface Props {
  tabs: Tab[];
}

export const TabsList: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          return <TabsListItem tab={tab} key={tab.id} />;
        })}
      </ul>
    </div>
  );
};
