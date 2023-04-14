import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabID } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabID);
  const isSelected = tabs.some(tab => tab.id === tabID);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const { id, title } = tab;
              const isActive = id === tabID;

              return (
                <li
                  data-cy="Tab"
                  className={classNames({
                    'is-active': isActive,
                  })}
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
          {isSelected
            ? currentTab?.content
            : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
