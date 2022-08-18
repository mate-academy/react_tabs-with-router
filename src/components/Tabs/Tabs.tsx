import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Prors = {
  tabs: Tab[],
};

export const Tabs: React.FC<Prors> = ({
  tabs,
}) => {
  const { tabId } = useParams();
  const content
    = tabs.find(tab => tab.id === tabId)?.content || 'Please select a tab';

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={
                classNames({ 'is-active': tab.id === tabId })
              }
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {content}
      </div>
    </div>
  );
};
