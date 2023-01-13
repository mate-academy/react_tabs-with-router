import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);

  useEffect(() => {
    if (!tabId) {
      return;
    }

    const currentTab = tabs.find(tabItem => tabItem.id === tabId);

    setSelectedTab(currentTab || null);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tab,
  ) => {
    if (e.currentTarget.id === tabId) {
      return;
    }

    setSelectedTab(tab);
  };

  const hasTabContent = !tabId || !selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tabId === tab.id,
              })}
              data-cy="Tab"
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
                onClick={(e) => handleClick(e, tab)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {hasTabContent ? 'Please select a tab' : selectedTab.content}
      </div>
    </div>
  );
};
