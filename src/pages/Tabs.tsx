import { Link } from 'react-router-dom';
import { tabs } from '../components/Tabs';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  selectedTab?: Tab;
};

export const Tabs: React.FC<Props> = ({ selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': selectedTab?.id === id })}
              key={id}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
