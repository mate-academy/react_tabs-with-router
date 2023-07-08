// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabsList } from './TabsList';

interface Props {
  tabs: Tab[]
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const isValidTabId = tabs.some(tab => tab.id === tabId);

  // console.log(isValidTabId)

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsList
        tabs={tabs}
        selectedTabId={tabId}
      />

      <div className="block" data-cy="TabContent">
        {isValidTabId
          ? tabs.find(tab => tab.id === tabId)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
