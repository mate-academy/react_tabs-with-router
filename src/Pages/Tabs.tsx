import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { TabContent } from '../Components/TabContent';
import { tabs } from '../DB/tabs';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              key={id}
              className={classNames({ 'is-active': id === tabId })}
            >
              <Link
                to={id}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <TabContent
        selectedTabId={tabId}
      />
    </>
  );
};
