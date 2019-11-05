import React from 'react';
import TabLink from '../link/TabLink';
import TabHome from '../tabscontent/TabHome';
import TabProfile from '../tabscontent/TabProfile';
import TabContact from '../tabscontent/TabProfile';
import { Switch, Route } from 'react-router-dom';

class Tabs extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeTab: '',
    }
  }

  render() {
    const {
      tabs,
      match: { path },
      selectTab,
      activeTab,
    } = this.props;

    return (
      <>
        <div className="ui attached tabular menu position">
          {
            tabs.map(tab =>
              <TabLink
                link={`${path}/${tab.id}`}
                title={tab.title}
                activeTab={activeTab}
                selectTab={selectTab}
                id={tab.id}
              />)
            }
        </div>
        <Switch>
          <Route path={`${path}/${tabs[0].id}`} render={() => <TabHome content={tabs[0].content}/>} />
          <Route path={`${path}/${tabs[1].id}`} render={() => <TabProfile content={tabs[1].content} />} />
          <Route path={`${path}/${tabs[2].id}`} render={() => <TabContact content={tabs[2].content} />} />
        </Switch>
      </>
    )
  }
}

export default Tabs;

// <TabContent content={tabs[activeContent].content} />
