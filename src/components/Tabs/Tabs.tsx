import { FC } from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
}

export const Tabs: FC<Props> = ({
  tabs,
}) => {
  const { tabsId } = useParams();

  return (
    <div data-cy="TabsComponent" className="section">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames(
                { 'is-active': tab.id === tabsId },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
                id={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          tabs.find((tab) => tab.id === tabsId)?.content
          || 'Please select a tab'
        }
      </div>
    </div>
  );
};
