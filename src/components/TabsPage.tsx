import {
  Link,
  useParams,
} from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <h1 className="title">Tabs Page</h1>

      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <Link to={`/tabs/${tab.id}`}>
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="box">
        {!tabId
          ? (
            <p>Please, select a tab</p>
          )
          : (
            <p>{tabs.find(tab => tab.id === tabId)?.content}</p>
          )}
      </div>
    </>
  );
};
