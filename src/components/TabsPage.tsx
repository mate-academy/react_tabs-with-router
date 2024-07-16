import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
type Props = {
  tabs: Tab[];
};
export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const isTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isTab ? isTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
