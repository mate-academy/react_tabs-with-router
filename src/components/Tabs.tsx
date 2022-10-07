import { Link } from 'react-router-dom';

interface TabsInterface {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: TabsInterface[]
  selectedTab: string
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
}) => {
  const activeTab = tabs.find(
    tab => tab.id === selectedTab,
  );

  return (

    <div>
      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              key={tab.id}
              className={
                tab.id === activeTab?.id
                  ? 'is-active'
                  : ''
              }
            >
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="tab-content"
      >
        {activeTab?.content}
      </div>

      {!activeTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </div>
  );
};
