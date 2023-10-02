import cn from 'classnames';
import { Tab } from '../../types/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected : (tab: Tab) => void;
};

export const Tabs = ({
  tabs, selectedTabId, onTabSelected,
}: TabsProps) => {
  const onClickHandler = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const getClassName = (tab: Tab) => cn({
    'is-active': selectedTabId === tab.id
    || (tabs[0].id === tab.id && tabs.every(t => t.id !== selectedTabId)),
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                className={getClassName(tab)}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={
                    () => onClickHandler(tab)
                  }
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>

  );
};
