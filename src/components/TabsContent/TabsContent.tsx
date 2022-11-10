import cn from 'classnames';
import { useMemo } from 'react';

import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string
};

export const TabsContent: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const findTabContent = useMemo(() => (
    tabs.find(tab => selectedTabId === tab.id)
  ), [selectedTabId]);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(selectedTabId && findTabContent?.content)
        || 'Please select a tab'}
      </div>
    </>
  );
};
