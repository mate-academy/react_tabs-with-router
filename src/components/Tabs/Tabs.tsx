import { useParams } from 'react-router-dom';
import { tabs } from '../../constants/tabs';
import { TabItem } from '../Tab/TabItem';

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabItem
                tab={tab}
                key={tab.id}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabId && tabs.find(tab => tab.id === tabId)?.content}
          {!tabId && 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
