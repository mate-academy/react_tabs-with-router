import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabContent } from '../TabContent/TabContent';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  /* const [selectedTab, setSelectedTab] = useState<Tab | null>(null); */
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tabId === tab.id);

  /* const handleTab = (tab: Tab) => {
    setSelectedTab(tab);
  }; */

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTab === tab })}
            >
              <TabItem
                tab={tab}
              />
            </li>
          ))}
        </ul>
      </div>
      <TabContent
        selectedTab={selectedTab}
      />
    </>
  );
};
