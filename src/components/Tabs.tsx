import { Link } from 'react-router-dom';
import { FC } from 'react';
import classNames from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {
  selectetTabId: string | undefined;
};

export const Tabs: FC<Props> = ({ selectetTabId }) => {
  const selectedTab = tabs.find(tab => (
    tab.id === selectetTabId
  ));

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = selectedTab?.id === id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames(
                  { 'is-active': !isSelected },
                )}
              >
                <Link to={`../${id}`} data-cy="TabLink">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
