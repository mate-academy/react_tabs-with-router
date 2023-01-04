import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const params = useParams();
  const selectedTab = tabs.find(tab => params.tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const isSelected = params.tabId === tab.id;

              return (
                <li
                  key={tab.id}
                  className={cn({ 'is-active': isSelected })}
                  data-cy="Tab"
                >
                  <Link
                    to={`/tabs/${tab.id}`}
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {
          selectedTab
            ? (
              <div
                id={params.tabId}
                className="block"
                data-cy="TabContent"
              >
                {selectedTab.content}
              </div>
            )
            : (
              <div className="block" data-cy="TabContent">
                Please select a tab
              </div>
            )
        }

      </div>
    </>
  );
};
