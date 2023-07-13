import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[],
}

export const TabContent:React.FC<Props> = ({ tabs }) => {
  const { tabId = 0 } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab?.content || 'Please select a tab'}
    </div>
  );
};
