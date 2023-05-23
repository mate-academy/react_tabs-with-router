import classNames from 'classnames';
import { useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const findContentByIdTabs = (tabId: string | undefined) => {
  return tabs
    .find(findTab => findTab.id === tabId)
    ?.content;
};

export const Tabs = () => {
  const { tabId } = useParams();

  // console.log(tabId);

  return (
    <div className="container">
      {/* <h1 className="title">Home page</h1> */}
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <a href={`#/tabs/${tab.id}`}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findContentByIdTabs(tabId)
          ? findContentByIdTabs(tabId)
          : 'Please select a tab'}
      </div>
    </div>
  );
};
