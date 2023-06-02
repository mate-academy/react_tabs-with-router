import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';

type TabNavigateProps = {
  tabs:Tab[];
};

export const TabNavigate: FC<TabNavigateProps> = ({ tabs }) => {
  const { id } = useParams();
  const activeTab = tabs.find(tab => tab.id === id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': tab.id === id },
              )}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {id && activeTab ? `${activeTab.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
