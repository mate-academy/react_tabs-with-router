import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab?: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({
              'is-active': tab.id === selectedTab?.id,
            })}
          >
            <Link to={`../${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab
        ? selectedTab.content
        : 'Please select a tab'}
    </div>
  </div>
);
