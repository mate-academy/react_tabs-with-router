import { FC } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  selectedTabId?: string;
};

export const Tabs: FC<Props> = ({ selectedTabId }) => {
  const selectedTab = tabs.find(tab => (
    tab.id === selectedTabId
  ));

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({
                'is-active': selectedTab?.id === id,
              })}
            >
              <Link to={`../${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
