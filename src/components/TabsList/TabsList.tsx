import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { NewTab } from '../Tab';
import { TabContent } from '../TabContent';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const content = tabs.find((tab) => tab.id === tabId)?.content || '';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <NewTab key={tab.id} tab={tab} tabId={tabId} />
          ))}
        </ul>
      </div>

      <TabContent content={content} />
    </>
  );
};
