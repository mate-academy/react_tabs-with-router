import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="container">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={
                classNames({ 'is-active': tab.id === tabId })
              }
              key={tab.id}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="box">
        {tabId === undefined
          ? (
            <p>Please, select a tab</p>
          ) : (
            <p>{tabs.find(tab => tab.id === tabId)?.content}</p>
          )}
      </div>
    </div>
  );
};
