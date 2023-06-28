import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string | undefined,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const currTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames('', {
                'is-active': tab.id === currTab?.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!currTab ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        ) : (
          currTab.content
        )}
      </div>
    </div>
  );
};
