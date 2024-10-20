import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  // const [selectedTabId, setSelectedTabId] = useState(tabs[0]);
  const { tabId } = useParams();
  const selectedTabsId = tabId ? tabId : '';

  const content = tabs.find(tab => tabId === tab.id)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': selectedTabsId === tab.id,
                })}
              >
                <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {selectedTabsId ? (
        <div className="block" data-cy="TabContent">
          {content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
