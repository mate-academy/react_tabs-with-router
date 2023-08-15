import { Link, useParams } from 'react-router-dom';

const Tabs = () => {
  const { tabId } = useParams();
  const tabs = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const isActive = (id: string) => (tabId === id ? 'is-active' : undefined);

  const getTabById = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li data-cy="Tab" className={isActive(tab.id)} key={tab.id}>
                <Link to={`${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById ? getTabById.content : 'Please select a tab'}
      </div>
    </>
  );
};

export default Tabs;
