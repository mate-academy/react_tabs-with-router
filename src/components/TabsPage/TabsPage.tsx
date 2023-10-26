import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { TabContent } from '../TabContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const [content, setContent] = useState('Please select a tab');

  const { tabId } = useParams();

  useEffect(() => {
    const tabsId = tabs.map(tab => tab.id);

    if (!tabId || !tabsId.includes(tabId.toString())) {
      setContent('Please select a tab');
    }

    const currentTab = tabs.find(tab => tab.id === tabId);

    if (currentTab) {
      setContent(currentTab.content);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <TabContent content={content} />
    </>
  );
};
