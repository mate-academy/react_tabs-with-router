import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(currentTab => currentTab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={cn({
                  'is-active': tab === selectedTab,
                })}
                data-cy="Tab"
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

        {selectedTab
          ? (
            <div className="block" data-cy="TabContent">
              {selectedTab.content}
            </div>
          )
          : (
            <div className="block" data-cy="TabContent">
              Please select a tab
            </div>
          )}
      </div>
    </>
  );
};
