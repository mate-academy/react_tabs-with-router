import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsContent = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const tab = tabs.find(t => t.id === tabId);

  return tab ? <p>{tab.content}</p> : <p>Please select a tab</p>;
};
