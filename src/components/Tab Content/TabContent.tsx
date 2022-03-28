import { useParams } from 'react-router-dom';
import './TabContent.scss';

type Props = {
  tabs: Tab[],
};

export const TabContent: React.FC<Props> = (props) => {
  const { tabId } = useParams<{ tabId: string }>();
  const { tabs } = props;

  return (
    <div className="tabContent">
      {tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab'}
    </div>
  );
};
