import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeContent = tabs.find(({ id }) => id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': id === tabId,
              })}
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
        {activeContent || 'Please select a tab'}
      </div>
    </>
  );
};
