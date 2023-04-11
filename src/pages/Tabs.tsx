import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId = '' } = useParams();

  const contentToShow = tabs.find(({ id }) => id === tabId)?.content;

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isSelected = id === tabId;

            return (
              <li
                data-cy="Tab"
                className={classNames(
                  { 'is-active': isSelected },
                )}
              >
                <Link to={`../${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {contentToShow || 'Please select a tab'}
      </div>
    </>
  );
};
