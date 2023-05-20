import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { TabLink } from '../components/TabLink';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);
  const { tabId } = useParams();

  useEffect(() => {
    const findTab = tabs.find(({ id }) => id === tabId);

    if (findTab) {
      setSelectedTab(findTab);
    } else {
      setSelectedTab(null);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <TabLink tab={tab} setSelectedTab={setSelectedTab} />
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? `${selectedTab.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
