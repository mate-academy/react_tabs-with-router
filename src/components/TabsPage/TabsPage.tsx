import { FC, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { TabsContent } from '../TabsContent/TabsContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string,
  title: string,
  content: string,
}

export const TabsPage: FC = () => {
  const { tabId } = useParams();
  const [currentTab, setCurrentTab] = useState<Tab | null>(null);
  const [isIdValid, setIsIdValid] = useState(false);

  useEffect(() => {
    const tab = tabs.find(t => t.id === tabId) || null;

    setCurrentTab(tab);

    return tab ? setIsIdValid(true) : setIsIdValid(false);
  }, [tabId]);

  return (
    <>
      <div className="tabs is-centered is-boxed">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className="tabs__item"
            >
              <NavLink
                to={`/tabs/${tab.id}`}
                className={({ isActive }) => (
                  isActive ? 'tabs__link tabs__link--active' : 'tabs__link')}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {!isIdValid && <p>Please select a tab</p>}

      {currentTab && <TabsContent content={currentTab.content} />}
    </>
  );
};
