import { FC, useMemo, memo } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { TabLink } from '../TabLink/TabLink';
import { tabs } from '../../api/tabs';

export const TabsPage: FC = memo(() => {
  const { tabId = '' } = useParams();

  const activeTabContent = useMemo(() => {
    const activeTab = tabs.find(tab => tab.id === tabId);

    return activeTab?.content || 'Please select a tab';
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': id === tabId,
              })}
              key={id}
            >
              <TabLink
                id={id}
                title={title}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent}
      </div>
    </>
  );
});
