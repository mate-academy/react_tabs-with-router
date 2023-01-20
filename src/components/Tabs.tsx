import { useParams } from 'react-router-dom';
import { TabItem } from './TabItem';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  const currentContent = () => {
    return tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab';
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              tab={tab}
              selectedTab={tabId}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentContent()}
      </div>
    </div>
  );
};
