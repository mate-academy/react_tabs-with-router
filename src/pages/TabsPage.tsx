import { useParams } from 'react-router-dom';
import { TabLink } from '../components/TabLink';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const visibleContent = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabLink tab={tab} key={tab.id} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {visibleContent?.content || 'Please select a tab'}
      </div>
    </>
  );
};
