import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const getSelectedTabText = () => {
    const selectedTabContent = tabs.find((tab: Tab) => tab.id === tabId);
    const content = (!selectedTabContent
      ? 'Please select a tab'
      : selectedTabContent.content
    );

    return content;
  };

  const selectedTabText = getSelectedTabText();
  const selectedTab = (id:string) => tabId === id;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const { title, id } = tab;

            return (
              <li
                data-cy="Tab"
                className={classNames({ 'is-active': selectedTab(id) })}
                key={id}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTabText}
      </div>
    </>
  );
};
