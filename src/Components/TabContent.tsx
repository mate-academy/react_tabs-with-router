import { useParams } from 'react-router-dom';

interface Tabs {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tabs[],
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find((tab: Tabs) => tab.id === tabId);

  return (
    <p>{selectedTab ? selectedTab.content : 'Please select a tab'}</p>
  );
};
