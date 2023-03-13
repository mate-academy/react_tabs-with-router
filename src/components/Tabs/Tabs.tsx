import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabComponent } from '../Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: FC<Props> = ({
  tabs,
}) => {
  const { tabId = '' } = useParams();

  const content = tabs.find(
    ({ id }: Tab) => id === tabId,
  )?.content || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }: Tab) => {
              const isActive = id === tabId;

              return (
                <TabComponent
                  key={id}
                  isActive={isActive}
                  id={id}
                  title={title}
                />
              );
            })}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {content || (
            <>
              Please select a tab
            </>
          )}
        </div>
      </div>
    </>
  );
};
