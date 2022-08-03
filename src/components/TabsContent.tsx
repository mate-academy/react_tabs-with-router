import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const content = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div className="block" data-cy="tab-content">
      {
        content !== undefined
          ? content
          : 'Please select a tab'
      }
    </div>
  );
};
