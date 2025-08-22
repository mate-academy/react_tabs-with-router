import { Link, useParams } from 'react-router-dom';
type Props = {
  id: string;
  title: string;
  content: string;
};

const tabs: Props[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tab: React.FC = () => {
  const { tabId } = useParams();
  const title = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {title ? title : 'Please select a tab'}
      </div>
    </>
  );
};
