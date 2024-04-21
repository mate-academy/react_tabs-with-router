import { Link, useLocation, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const params = useParams();
  const pathname = useLocation().pathname;
  const tabContent = tabs.find(tab => tab.id === params?.tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': pathname.includes(tab.id),
              })}
            >
              <Link to={`./${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {tabContent ? (
        <div className="block" data-cy="TabContent">
          {tabContent}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
