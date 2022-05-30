import { useParams } from 'react-router-dom';
import classnames from 'classnames';
import './TabsPage.scss';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">
        Selected tab is&nbsp;
        {tabs.find(tab => tab.id === tabId)?.title}
      </h1>

      <div className="container">
        <div className="tabs">
          <ul className="tabs__list">
            {tabs.map(tab => (
              <li
                className="tabs__item"
                key={tab.id}
              >
                <a
                  href={`#/tabs/${tab.id}`}
                  className={classnames(
                    'tabs__link',
                    { 'tabs__link--isActive': tabId === tab.id },
                  )}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="tabcontent">
          <p>
            {tabs.find(tab => tab.id === tabId)?.content
              || 'Please select a tab'}
          </p>
        </div>
      </div>
    </>
  );
};
