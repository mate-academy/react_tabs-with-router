import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { TabContex } from '../../store/TabContex';
import { NewTab } from './NewTab';

export const Tabs: React.FC = () => {
  const { tabs } = useContext(TabContex);

  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <NewTab
              tab={tab}
              key={tab.id}
            />

          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
