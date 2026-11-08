import { Tab } from '../types/Tab';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tab = tabs.find(t => t.id === tabId);

  return <div className="block">{tab?.content}</div>;
};
