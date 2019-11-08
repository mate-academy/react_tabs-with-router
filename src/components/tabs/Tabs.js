import React from 'react';
import TabLink from '../link/TabLink';
import CurrentTab from '../currenttab/CurrentTab'
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
            {tabs.map(tab => <Route path={`${path}/${tab.id}`} render={() => <CurrentTab content={tab.content}/>} />)}
        </Switch>
      </>
    )
  }
}

export default Tabs;
