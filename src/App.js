import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import './main.scss';
import DevTools from 'mobx-react-devtools';
import Header from './components/Header';
import Main from './components/Main';

@observer
export default class App extends React.Component {

  static propTypes = {
    appStore: React.PropTypes.object,
  };

  static childContextTypes = {
    appStore: React.PropTypes.object,
  };
  getChildContext() {
    return {
      appStore: this.props.appStore,
    };
  }

  render() {
    const { appStore } = this.props;
    return (
      <div className="container">
        <DevTools />
        <Header appStore={appStore} />
        <Main appStore={appStore} />
      </div>
    );
  }
}
