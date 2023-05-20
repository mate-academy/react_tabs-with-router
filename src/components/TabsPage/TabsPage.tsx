import {
  FC,
  useState,
  useMemo,
  memo,
} from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { TabLink } from '../TabLink/TabLink';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: FC = memo(() => {
  const { tabId = '' } = useParams();

  const [activeTabId, setActiveTabId] = useState(tabId);

  const handleTabSwitch = (id: string) => {
    setActiveTabId(id);
  };

  const activeTabContent = useMemo(() => {
    const activeTab = tabs.find(tab => tab.id === activeTabId);

    return activeTab?.content || 'Please select a tab';
  }, [activeTabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': id === activeTabId,
              })}
            >
              <TabLink
                id={id}
                title={title}
                onTabPick={handleTabSwitch}
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
