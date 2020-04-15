import React from 'react';
import Sidebar from './pages/SideBar';
import Header from './pages/Header';
import './App.scss';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './router'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeMenuFoldState = this.changeMenuFoldState.bind(this);
    this.state = {
      isMenuFold: true,
    };
  }
  changeMenuFoldState() {
    this.setState({
      isMenuFold: !this.state.isMenuFold,
    });
  }
  render() {
    return (
      <div className='App'>
        <Router>
          <Sidebar isMenuFold={this.state.isMenuFold} />
          <Header
            changeMenuFoldState={this.changeMenuFoldState}
            isMenuFold={this.state.isMenuFold}
          />
          <div className={
            this.state.isMenuFold ? 'content-wrap' : 'content-wrap-close'
          }>
            <Switch>
              {renderRoutes(routes)}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

