import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[];
  selectedId: string;
}

export const TabsList: React.FC<Props> = ({ tabs, selectedId }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({
            'is-active': selectedId === tab.id,
          })}
        >
          <Link to={`/tabs/${tab.id}`}>
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
