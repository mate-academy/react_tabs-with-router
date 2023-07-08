import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const TabsList: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const isSelected = (id: string) => selectedTabId === id;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            data-cy="Tab"
            className={classNames({
              'is-active': isSelected(id),
            })}
            key={id}
          >
            <Link
              to={`/tabs/${id}`}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
