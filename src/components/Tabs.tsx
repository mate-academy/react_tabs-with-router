import { Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  activeTabId?: string;
};

export const Tabs = ({ activeTabId }: Props) => {
  const activeTab = tabs.find(t => t.id === activeTabId);

  return (
    <>
      {' '}
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
          {/* <li data-cy="Tab" className="is-active">
            <a href="#/">Tab 1</a>
          </li>
          <li data-cy="Tab">
            <a href="#/">Tab 2</a>
          </li>
          <li data-cy="Tab">
            <a href="#/">Tab 3</a>
          </li> */}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {/* Please select a tab */}
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
