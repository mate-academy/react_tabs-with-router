import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[]
}

export const TabInfo: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tab = tabs.find(curTab => curTab.id === tabId);

  if (tab) {
    return <h1 className="title">{tab.content}</h1>;
  }

  return <h1 className="title">Please select a tab</h1>;
};
