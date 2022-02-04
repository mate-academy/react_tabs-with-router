import { Link, Outlet, useParams } from 'react-router-dom';
import '../App.scss';

interface Tabs {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tabs[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>content</th>
          </tr>
        </thead>
        <tbody>
          {tabs.map(tab => (
            <>
              <tr
                key={tab.id}
                style={tabId === tab.id ? { backgroundColor: 'gray' } : {}}
              >
                <td>{tab.id}</td>
                <td>{tab.title}</td>
                <td>{tab.content}</td>
                <td>
                  <Link
                    to={`/tabs/${tab.id}`}
                    className="button"
                  >
                    +
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <Outlet />
    </>
  );
};
