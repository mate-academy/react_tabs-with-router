import { useState } from 'react';
import { Tab } from '../../types/Tab';

import { InnerNavbar } from '../../components/InnerNavbar/InnerNavbar';

interface Props {
  tabs: Tab[];

}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [isActive, setIsActive] = useState('');

  const isTabClicked = (value: string) => {
    setIsActive(value);
  };

  const displayContent = tabs.filter(page => page.id === isActive) || null;

  return (

    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <InnerNavbar
                tab={tab}
                key={tab.id}
                isTabClicked={isTabClicked}
                isActive={isActive}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {isActive.length > 0 ? (
            displayContent.map((pageContent) => (
              <p key={pageContent.id}>
                {pageContent.content}
              </p>
            ))
          ) : (
            <p>Please select a tab</p>
          )}
        </div>

      </div>
    </div>
  );
};
