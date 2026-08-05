import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({ 'is-active': tab.id === tabId })}
          >
            <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
