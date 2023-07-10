import { FC } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({
  tabs,
}) => {
  const { tabId = 0 } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId) || '';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab: Tab) => (
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
            ? selectedTab.content
            : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
