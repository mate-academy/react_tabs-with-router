import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId)?.content;
  const ifTabIdIsWrong = tabId === '' || selectedTab === undefined;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              tab={tab}
              key={tab.id}
              tabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {ifTabIdIsWrong ? (
          'Please select a tab'
        ) : (
          <>
            {`${selectedTab}`}
          </>
        )}
      </div>
    </>
  );
};
