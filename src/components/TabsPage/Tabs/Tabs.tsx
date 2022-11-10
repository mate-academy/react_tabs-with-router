import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../../types/Tab';

type Props = {
  selectedTabId: string;
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ selectedTabId, tabs }) => {
  return (
    <ul>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <li
            className={classNames(
              { 'is-active': id === `${selectedTabId}` },
            )}
            data-cy="Tab"
            key={id}
          >
            <Link to={`/tabs/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
