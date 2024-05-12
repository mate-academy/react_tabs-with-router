import { tabs, messageNotSelectedTab } from '../../constants';

import { Tab } from '../../types/Tab';

import cn from 'classnames';

import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(item => item.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((item: Tab) => (
            <li
              key={item.id}
              data-cy="Tab"
              className={cn({
                'is-active': item.id === tabId,
              })}
            >
              <Link to={`/tabs/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content ?? messageNotSelectedTab}
      </div>
    </>
  );
};
