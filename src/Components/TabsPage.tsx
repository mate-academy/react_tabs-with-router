import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const tabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              key={tab.id}
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <NavLink to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabContent || 'Please select a tab'}
      </div>
    </>
  );
};
