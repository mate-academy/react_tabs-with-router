import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => (
          <li
            key={id}
            className={classNames(
              { 'is-active': id === tabId },
            )}
            data-cy="Tab"
          >
            <Link
              to={`/tabs/${id}`}
              data-cy="TabLink"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
