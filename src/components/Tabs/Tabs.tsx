import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTab: Tab | undefined,
  selectedTabId: string | undefined,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  selectedTabId,
}) => {
  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }: Tab) => (
            <li
              key={id}
              className={selectedTabId === id ? 'is-active' : ''}
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

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
