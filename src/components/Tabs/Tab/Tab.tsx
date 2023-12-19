import { useParams } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabContent = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return <>{selectedTab ? selectedTab.content : 'Please select a tab'}</>;
};
