import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();

  const tabContent = useMemo(() => {
    return tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab';
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const {
              id,
              title,
            } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames(
                  { 'is-active': tabId === id },
                )}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
