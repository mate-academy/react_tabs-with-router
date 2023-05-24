import {
  Link,
  Route, Routes, useParams,
} from 'react-router-dom';
import classNames from 'classnames';
import { FC } from 'react';
import { Tab } from '../../types/Tab';

export type LinkProps = {
  path: string;
  title: string;
};

type Props = {
  tabs: Tab[];
};

export const TabLink: FC<LinkProps> = ({ path, title }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={
        classNames({ 'is-active': tabId === path })
      }
    >
      <Link to={path}>{title}</Link>
    </li>
  );
};

export const Tabs: FC<Props> = ({ tabs }) => {
  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabLink key={tab.id} path={tab.id} title={tab.title} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        <Routes>
          {tabs.map((tab) => (
            <Route
              key={tab.id}
              path={tab.id}
              element={<h1>{tab.content}</h1>}
            />
          ))}

          <Route
            path="*"
            element={<h1> Please select a tab</h1>}
          />
        </Routes>
      </div>
    </>
  );
};
