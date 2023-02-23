import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: FC<Props> = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState<Tab | null>();
  const { tabId = null } = useParams();

  const findTab = () => {
    const tab = tabs.find(t => t.id === tabId);

    if (tab) {
      setCurrentTab(tab);
    } else {
      setCurrentTab(null);
    }
  };

  useEffect(() => {
    findTab();
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
        {currentTab
          ? `${currentTab.content}`
          : 'Please select a tab'}
      </div>
    </div>
  );
};
