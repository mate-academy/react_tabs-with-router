import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];

}

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((currentTab) => (
              <li // added classnames as requested
                className={cn({
                  'is-active': tabId === currentTab.id,
                })}
                data-cy="Tab"
                key={currentTab.id}
              >
                <Link
                  to={`/tabs/${currentTab.id}`}
                  data-cy="TabLink"
                >
                  {currentTab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabId
            ? tabs.find(tab => tab.id === tabId)?.content
            : ' Please select a tab'}
        </div>
      </div>
    </>
  );
};
