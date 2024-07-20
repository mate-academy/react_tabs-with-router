import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | null;
  selectTab: (id: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, selectTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <div key={tab.id}>
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId === tab.id,
              })}
              onClick={() => {
                selectTab(tab.id);
              }}
            >
              <a href="#/">{tab.title}</a>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
