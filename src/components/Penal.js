import React from 'react';
import { Route } from 'react-router-dom';
import Tabs from './Tabs';

class Penal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '',
    };
  }

  componentDidMount() {
    const active = JSON.parse(sessionStorage.getItem('activeTab'));

    this.setState({
      activeTab: active || '',
    });
  }

  componentDidUpdate() {
    sessionStorage.setItem('activeTab', JSON.stringify(this.state.activeTab));
  }

  selectTab = (selectedIndex) => {
    (this.setState({ activeTab: selectedIndex }));
  }

  actTab = () => (this.state.activeTab.content)

  render() {
    const { activeTab } = this.state;

    return (
      <>
        <Tabs
          className="item"
          tabs={this.props.tabs}
          onTabSelected={this.selectTab}
        />
        <div>
          <Route path={`/tabs/${activeTab.id}`} exact component={this.actTab} />
        </div>
      </>
    );
  }
}

export default Penal;
