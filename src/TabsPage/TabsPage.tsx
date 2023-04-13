import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { TabModel } from '../components/TabModel/TabModel';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabModel
              key={tab.id}
              tabId={tabId}
              tab={tab}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.some((tab) => tab.id === tabId)
          ? tabs.find((tab) => tab.id === tabId)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
