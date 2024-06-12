import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const TabPage = () => {
  const { tabId } = useParams();

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const tabIdP = tabs.filter(t => t.id === tabId)[0] || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => {
            return (
              <li
                data-cy="Tab"
                key={'tab' + el.id}
                className={classNames({
                  'is-active': tabIdP && el.id === tabIdP.id,
                })}
              >
                <Link to={`../${el.id}`}>{el.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabIdP && tabIdP.content}
        {!tabIdP && 'Please select a tab'}
      </div>
    </>
  );
};
