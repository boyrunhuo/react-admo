import React from 'react';
import './Content.scss';
import Home from '../Home';
import User from '../User/';
import { Route } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.isMenuFold ? 'content-warp' : 'content-warp-close'
        }
      >
        <Route exact path='/' component={Home} />
        <Route path='/user' component={User} />
      </div>
    );
  }
}

export default Content;
