import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTabId === id,
              })}
            >
              <Link to={`/tabs/${id}`}>{`${title}`}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? (`${selectedTab.content}`) : 'Please select a tab'}
      </div>
    </>
  );
};
