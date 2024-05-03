import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

const Tabs = () => {
  const { tabId } = useParams();

  const listOfTabs = tabs.map(tab => tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              {...(tabId === tab.id && { className: 'is-active' })}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId && listOfTabs.includes(tabId)
          ? tabs.filter(tab => tab.id === tabId)[0].content
          : 'Please select a tab'}
      </div>
    </>
  );
};

export default Tabs;
