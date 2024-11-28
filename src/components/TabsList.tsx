import { useParams } from 'react-router-dom';
import { useTabContext } from './TabContext';
import { TabPage } from './TabPage';

type Props = {};

export const TabsList: React.FC<Props> = () => {
  const { tabs } = useTabContext();
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const defaultContent = 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabPage key={tab.id} tab={tab} selectedTab={selectedTab} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || defaultContent}
      </div>
    </>
  );
};
