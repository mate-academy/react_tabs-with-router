import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const tabContent = tabs.find((tab) => tab.id === tabId)?.content;

  return <p>{tabContent === undefined ? ('Please select a tab') : (`${tabContent}`)}</p>;
};
