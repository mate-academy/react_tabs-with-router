import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Container } from '../components/Container';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTabId = tabId ?? null;
  const currentTab = tabs.find(el => el.id === currentTabId);

  return (
    <Container title="Tabs page">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(el => (
            <li
              data-cy="Tab"
              className={classNames('navbar-item', {
                'is-active': currentTab && currentTab.id === el.id,
              })}
              key={el.id}
            >
              <Link to={el.id}>
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </Container>
  );
};
