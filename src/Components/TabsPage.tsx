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
        <tbody>
          {tabs.map(tab => (
            <>
              <tr key={tab.id}>
                <td>
                  <Link
                    to={`/tabs/${tab.id}`}
                    className="button"
                    style={tabId === tab.id ? { backgroundColor: 'gray' } : {}}
                  >
                    {tab.title}
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
