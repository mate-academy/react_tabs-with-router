import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<Tab['id']>();
  const selectedTab: Tab | null = tabs.find((tab) => tab.id === tabId) || null;

  return <>{selectedTab && <p>{selectedTab.content}</p>}</>;
};
