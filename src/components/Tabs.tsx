import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams();
  const activatedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={`is-active: ${tab === activatedTab ? 'is-active' : ''}`}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}

        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activatedTab ? activatedTab.content : 'Please select a tab'}
      </div>

    </>
  );
};
