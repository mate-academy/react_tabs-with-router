import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabPage:React.FC<Props> = ({ tabs }) => {
  const { tabId = null } = useParams();
  const selectTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectTab
          ? selectTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
