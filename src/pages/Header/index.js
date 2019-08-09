import React from 'react';
import './Header.scss';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
// import Home from '../Home';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFoldIconClick = this.handleFoldIconClick.bind(this);
  }
  handleFoldIconClick() {
    this.props.changeMenuFoldState();
  }
  render() {
    const isMenuFold = this.props.isMenuFold;
    let foldIcon;
    if (isMenuFold) {
      foldIcon = <Icon type='menu-fold' />;
    } else {
      foldIcon = <Icon type='menu-unfold' />;
    }
    return (
      <div
        className={this.props.isMenuFold ? 'header-bar' : 'header-bar-close'}
      >
        <span onClick={this.handleFoldIconClick}>{foldIcon}</span>
        <span class='home-btn'>
          <Link to='/'>
            <Icon type='home' />
          </Link>
        </span>
      </div>
    );
  }
}

export default Header;
