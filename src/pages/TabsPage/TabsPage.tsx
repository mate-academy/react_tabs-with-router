import { useParams } from 'react-router-dom';

import TabPage from '../TabPage/TabPage';

import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const currentTab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabPage key={tab.id} tab={tab} tabId={tabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
