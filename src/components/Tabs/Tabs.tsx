import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const content = () => {
    const text = tabs.find(item => item.id === tabId)?.content;

    if (text === undefined) {
      return 'Please select a tab';
    }

    return text;
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => {
            return (
              <li
                data-cy="Tab"
                className={item.id === tabId ? 'is-active' : ''}
                key={item.id}
              >
                <Link to={`/tabs/${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content()}
      </div>
    </>
  );
};
