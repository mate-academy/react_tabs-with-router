import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const finderTab = tabs.find(tab => tab.id === tabId) as Tab;

  return (
    <div className="block" data-cy="TabContent">
      {finderTab.content}
    </div>
  );
};
