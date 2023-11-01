import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useTabs } from '../../store/TabsContext';

export const Tabs = () => {
  const { tabId } = useParams();
  const { tabs } = useTabs();
  const selectedTabId = tabs.find(tab => tab.id === tabId)?.id || null;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={cn({ 'is-active': selectedTabId === tab.id })}
              >
                <Link
                  data-cy="TabLink"
                  to={`/tabs/${id}`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId
          ? (tabs.find(tab => tab.id === selectedTabId))?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
