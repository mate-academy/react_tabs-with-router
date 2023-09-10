import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Prop = {
  tabs: Tab[],
};

export const Tabs:React.FC<Prop> = ({ tabs }) => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
