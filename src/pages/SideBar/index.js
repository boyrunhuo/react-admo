import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
// import Home from '../Home';
// import User from '../User';
import { Icon } from 'antd';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={this.props.isMenuFold ? 'side-bar' : 'side-bar-close'}>
        <ul>
          <li>
            <Link to='/'>
              <Icon type='home' />
              <span>{this.props.isMenuFold && '首页'}</span>
            </Link>
          </li>
          <li>
            <Link to='/user'>
              <Icon type='user' />
              <span>{this.props.isMenuFold && '用户页'}</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
