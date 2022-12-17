import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const tab = tabs.find(({ id }) => id === tabId);

    setContent(
      tab?.content || 'Please select a tab',
    );
  }, [tabId, tabs]);

  return (
    <>
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
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
