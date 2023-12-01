import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const SelectedTabId = tabId || '';
  const selectedTab = tabs.find((tab) => SelectedTabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-bpxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={id === SelectedTabId ? 'is-active' : ''}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
