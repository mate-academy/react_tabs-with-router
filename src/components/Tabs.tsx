import * as React from 'react';
import classNames from 'classnames';

type TabsProps = {
  activeTabId: string;
  children: React.ReactElement[];
};

export const Tabs: React.FC<TabsProps> = ({ activeTabId, children }) => {
  return (
    <div className="tabs is-boxed" data-cy="TabsComponent">
      <ul>
        {children.map(tab => (
          <li
            key={tab.props.id}
            className={classNames({
              'is-active': tab.props.id === activeTabId,
            })}
            data-cy="Tab"
          >
            {tab.props.title}
          </li>
        ))}
      </ul>

      <div>
        {children.map(tab =>
          tab.props.id === activeTabId ? (
            <div key={tab.props.id} className="block" data-cy="TabContent">
              {tab.props.children}
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};
