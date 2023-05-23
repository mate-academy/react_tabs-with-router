import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabPage } from '../TabPage/TabPage';

type Props = {
  tabs: Tab[]
};

export const TabsList: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTabContent = tabs.find((tab) => tab.id === tabId)?.content;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <TabPage
                key={tab.id}
                tab={tab}
                selectedTabId={tabId}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabContent || 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
