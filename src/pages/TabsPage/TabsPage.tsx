import {
  FC,
  memo,
  useEffect,
  useState,
} from 'react';

import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: FC = memo(() => {
  const { tabId } = useParams();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const tab = tabs.find(({ id }) => tabId === id);

    setContent(
      tab?.content || 'Please select a tab',
    );
  }, [tabId, tabs]);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === id },
              )}
            >
              <Link to={`../${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
});
