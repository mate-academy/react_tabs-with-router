import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';

export const TabsPage = () => {
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const { tabId } = useParams();

  let content = 'Please select a tab';

  if (tabId) {
    const getTab = tabs.find(({ id }) => id === tabId);

    if (getTab) {
      content = getTab.content;
    }
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(({ id, title }) => (
              <li
                data-cy="Tab"
                key={id}
                className={cn({ 'is-active': tabId === id })}
              >
                <NavLink to={id}>{title}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
