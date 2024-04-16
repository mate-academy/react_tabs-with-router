import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentId = tabId;
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': id === currentId })}
              >
                <Link to={`/tabs/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === currentId)?.content ||
          'Please select a tab'}
      </div>
    </>
  );
};
