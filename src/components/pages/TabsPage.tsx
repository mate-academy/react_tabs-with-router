import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTab = tabs.find((tab) => tab.id === tabId)?.content;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={cn({
                'is-active': id === tabId,
              })}
              data-cy="Tab"
              key={id}
            >
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab || 'Please select a tab'}
      </div>
    </div>
  );
};
