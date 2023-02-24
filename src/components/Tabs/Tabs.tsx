import cn from 'classnames';
import { FC, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: FC<Props> = ({ tabs }) => {
  // const [currentTab, setCurrentTab] = useState<Tab | null>();
  const { tabId = null } = useParams();
  const selectedTab = useMemo(() => {
    return tabs.find(t => t.id === tabId) || null;
  }, [tabId]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? `${selectedTab.content}`
          : 'Please select a tab'}
      </div>
    </div>
  );
};
