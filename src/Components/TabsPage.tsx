import classNames from 'classnames';
import {
  Link, useParams,
} from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export type TabsIdParams = {
  tabId: string;
};

export const TabsPage = () => {
  const { tabId } = useParams<TabsIdParams>();
  const selectedTab = tabs.find((item) => item.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((item) => (
            <li
              data-cy="Tab"
              key={item.id}
              className={
                classNames({ 'is-active': item.id === selectedTab?.id })
              }
            >
              <Link to={`/tabs/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>

    </>
  );
};
