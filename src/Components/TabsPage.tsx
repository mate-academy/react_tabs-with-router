import { useParams, Link } from 'react-router-dom';
import { Tab1Content } from './Tab1Content';
import { Tab2Content } from './Tab2Content';
import { Tab3Content } from './Tab3Content';

const validTabs = ['tab-1', 'tab-2', 'tab-3'];

export const TabsPage = () => {
  const { tabId } = useParams();

  const isValid = tabId && validTabs.includes(tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={tabId === 'tab-1' ? 'is-active' : ''}>
            <Link to="tab-1">Tab 1</Link>
          </li>
          <li data-cy="Tab" className={tabId === 'tab-2' ? 'is-active' : ''}>
            <Link to="tab-2">Tab 2</Link>
          </li>
          <li data-cy="Tab" className={tabId === 'tab-3' ? 'is-active' : ''}>
            <Link to="tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isValid ? (
          tabId === 'tab-1' ? (
            <Tab1Content />
          ) : tabId === 'tab-2' ? (
            <Tab2Content />
          ) : (
            <Tab3Content />
          )
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
