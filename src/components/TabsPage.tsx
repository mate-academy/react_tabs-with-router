import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

const TabsPage = () => {
  const { tabId } = useParams();

  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const showTabs = tabs.map(tab => (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': tabId === tab.id })}
      key={tab.id}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  ));

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>{showTabs}</ul>
      </div>

      {tabs.find(tab => tabId === tab.id) ? (
        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tabId === tab.id)?.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};

export default TabsPage;
