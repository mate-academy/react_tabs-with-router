import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tabText = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div className="block" data-cy="TabContent">
      {tabId && tabText}
    </div>
  );
};
