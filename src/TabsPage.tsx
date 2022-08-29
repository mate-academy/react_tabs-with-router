import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[],
}
export const TabsPage: FC<Props> = (props) => {
  const { tabs } = props;

  const { tabId } = useParams();

  const changeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (

            <li
              data-cy="tab"
              key={tab.id}
              className={cn(
                { 'is-active': tab.id === tabId },
              )}
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>

          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {changeTab ? changeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
