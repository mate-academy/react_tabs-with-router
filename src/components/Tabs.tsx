import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs: React.FC = () => {
  const { tabsId } = useParams();

  const selectedTab = tabs.find((tab) => tab.id === tabsId);
  // console.log(selectedTab);
  // const activeClassTab = tabsId === selectedTab?.id;
  // console.log(activeClassTab);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': selectedTab?.id === tab.id,
              })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};

export default Tabs;
