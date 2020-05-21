import React from 'react';
import {
  Route,
  NavLink,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Post from './Post';

import tabs from '../api/tabs';
import posts from '../api/posts';

const preparedTabs = tabs.map((tab: TabFromServer): TabIF => ({
  ...tab,
  post: posts.find((post: PostIF) => post.id === tab.content),
}));

interface Props extends RouteComponentProps<TParams> {
  match: Match;
}

const Tabs: React.FC<Props> = ({ match }) => {
  const findPost = (id: string) => preparedTabs
    .find(tab => tab.content === +id)?.post || null;

  return (
    <>
      <div className="ui attached tabular menu inverted brown">
        {preparedTabs.map(tab => (
          <NavLink
            key={tab.content}
            className="item"
            activeClassName="active"
            to={`${match.path}/${tab.content}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>

      { match.isExact && (
        <div className="ui segment inverted thanks">
          <h3 className="thanks__title">Dear Reader!</h3>
          <div className="thanks__text">
            If you like posts press the button with a&nbsp;&nbsp;
            <div className="ui large image label">
              <i className="star icon" />
              Star
              <div className="detail">8</div>
            </div>
            &nbsp;&nbsp;on this&nbsp;&nbsp;
            <a
              href="https://github.com/Andreas-Just/react_tabs-with-router"
              target="_blank"
              rel="noopener noreferrer"
              className="ui large brown image label"
            >
              <i className="github alternate icon" />
              GitHub Page
            </a>
          </div>
        </div>
      )}

      <Route
        path={`${match.path}/:currentTabId`}
        render={({ match: { params } }) => (
          <div className="ui bottom attached segment active tab inverted">
            {
              findPost(params.currentTabId) && (
                <Post post={findPost(params.currentTabId)} />
              )
            }
          </div>
        )}
      />
    </>
  );
};

export default withRouter(Tabs);
