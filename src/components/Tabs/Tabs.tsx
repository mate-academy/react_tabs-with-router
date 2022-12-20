import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map((tab) => (
        <li
          data-cy="Tab"
          className="is-active"
          key={tab.id}
        >
          <Link
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
