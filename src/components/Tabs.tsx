import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  onActive: (path: string) => boolean;
  tabs: Tab[];
};
export const Tabs: React.FC<Props> = ({ onActive, tabs }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          className={cn({ 'is-active': onActive(tab.id) })}
          key={tab.id}
        >
          <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
