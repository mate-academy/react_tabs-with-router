import { Link, useParams } from 'react-router-dom';
// import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const extistingTab = tabs.some(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          <div className="tabs is-boxed">
            {tabs.map(tab => (
              <ul>
                <li
                  data-cy="Tab"
                  className={tab.id === tabId ? 'is-active' : ''}
                  key={tab.id}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              </ul>
            ))}
          </div>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <p>
          {extistingTab ? `${tabs.find(tab => tab.id === tabId)?.content}`
            : 'Please select a tab'}
        </p>
      </div>
    </>
  );
};
