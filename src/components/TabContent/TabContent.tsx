import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const navigate = useNavigate();
  const { tabId } = useParams<Tab['id']>();
  const selectedTab: Tab | null = tabs.find((tab) => tab.id === tabId) || null;

  useEffect(() => {
    if (!selectedTab) {
      navigate('/tabs');
    }
  }, [tabId]);

  return <>{selectedTab && <p>{selectedTab.content}</p>}</>;
};
