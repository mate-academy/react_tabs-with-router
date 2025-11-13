import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[] | null;
}
export const TabContent = ({ tabs = null }: Props) => {
  let content;
  const { tabId } = useParams();

  if (!tabs) {
    content = 'Please select a tab';
  } else {
    content = tabs.find(t => t.id === tabId)?.content || 'Please select a tab';
  }

  return (
    <div className="block" data-cy="TabContent">
      {content}
    </div>
  );
};
