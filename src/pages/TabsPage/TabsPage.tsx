import classNames from 'classnames';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId = '' } = useParams();
  const tab = tabs.find(({ id }) => id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === id,
              })}
            >
              <a href={`#/tabs/${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>

      {tab
        ? (
          <div
            className="block"
            data-cy="TabContent"
          >
            {tab.content}
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
    </div>
  );
};
