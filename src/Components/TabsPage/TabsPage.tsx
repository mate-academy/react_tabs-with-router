import React from 'react';
import classNames from 'classnames';
import './TabsPage.scss';
import { useParams, Link } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();

  const idFromStr: ConvertFunc = (str) => {
    const ind = str.indexOf('-');

    return Number(str.slice(ind + 1));
  };

  const selectedObj = tabs.find(tab => idFromStr(tab.id) === +tabId);

  return (
    <>
      <h2>Tabs page</h2>
      <table className="tabs">
        <tr>
          {tabs.map(tab => (
            <th>
              <Link
                key={tab.id}
                className={classNames(
                  'tabs__button', { active: idFromStr(tab.id) === +tabId },
                )}
                type="button"
                to={`/tabs/${idFromStr(tab.id)}`}
              >
                {tab.title}
              </Link>
            </th>
          ))}
        </tr>
        <tr>
          <td className="tabs__title" colSpan={3}>
            {selectedObj?.content || 'Please select a tab'}
          </td>
        </tr>

      </table>
    </>
  );
};
