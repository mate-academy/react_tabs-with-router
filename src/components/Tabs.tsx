import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: Tab | null;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
