import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[]
};

export const TabPageInfo: React.FC<Props> = ({ tabs }) => {
  const tabId = useParams();

  const currentPageInfo = tabs.find(tab => tab.id === tabId.id);

  return (
    <p className="subtitle is-3">{currentPageInfo?.content}</p>
  );
};
