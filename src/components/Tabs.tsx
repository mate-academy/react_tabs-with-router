import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  const tabs = [
    { id: '1', title: 'Tab 1', content: 'Some text 1' },
    { id: '2', title: 'Tab 2', content: 'Some text 2' },
    { id: '3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const content = tabs.find(tab => tab.id === `${tabId}`)?.content;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  data-cy="Tab"
                  className={classNames({ 'is-active': tab.id === tabId })}
                  key={tab.id}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {content && (
          <div className="block" data-cy="TabContent">
            {content}
          </div>
        )}

        {!content && (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}
      </div>
    </div>
  );
};
