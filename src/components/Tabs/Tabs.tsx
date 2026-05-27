import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { Link } from 'react-router-dom';

interface Props {
  tabs: Tab[];
  activeTab?: Tab;
}

export const Tabs = ({ tabs, activeTab }: Props) => {
  // const
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({ 'is-active': tab.id === activeTab?.id })}
          >
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
