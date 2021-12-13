import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tab } from '../../Types/Type';

type Props = {
  tabs: Tab[],
};

export const TabsMain: React.FC<Props> = ({ tabs }) => {
  const navigate = useNavigate();
  const { tabId } = useParams<Tab['id']>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    if (!selectedTab) {
      navigate('/tabs');
    }
  }, [tabId]);

  return (
    <section className="main">
      <p>{selectedTab && selectedTab.content}</p>
    </section>
  );
};
