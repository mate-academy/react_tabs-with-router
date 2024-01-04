import classNames from 'classnames';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../enums/AppRouts';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const selectedTab = useMemo(() => (
    tabs.find((tab) => tab.id === tabId)
  ), [tabId]);

  const tabContent = selectedTab?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTab?.id === id,
              })}
            >
              <Link to={`${AppRoute.ROOT}${AppRoute.TABS}/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
