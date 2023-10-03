import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabContentProps = {
  tabs: Tab[]
};

export const TabContent: React.FC<TabContentProps> = ({ tabs }) => {
  const { id } = useParams();
  const tab = tabs.find(t => t.id === id);

  return (
    <div className="block" data-cy="TabContent">
      {tab ? tab.content : 'Please select a tab'}
    </div>
  );
};
