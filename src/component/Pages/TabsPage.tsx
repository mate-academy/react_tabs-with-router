import classNames from 'classnames';
import { useParams, Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs">
        <div className="tabs__header">
          {tabs.map((tab: Tab) => (
            <Link
              key={tab.id}
              to={tab.id}
              className={classNames('button', { 'button--active': tabId === tab.id })}
            >
              {tab.title}
            </Link>
          ))}
        </div>
        <div className="tabs__content">
          {
            tabId
              ? tabs.find(tab => tab.id === tabId)?.content
              : 'Select a tab'
          }
        </div>
      </div>
    </>
  );
};
