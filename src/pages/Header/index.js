import React from 'react';
import './Header.scss';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFoldIconClick = this.handleFoldIconClick.bind(this);
  }
  handleFoldIconClick() {
    this.props.changeMenuFoldState();
  }
  render() {
    const RightContent = (
      <Menu mode='horizontal'>
        <Menu.Item>
          <span className='home-btn'>
            <Link to='/'>
              <Icon type='home' />
            </Link>
          </span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div
        className={this.props.isMenuFold ? 'header-bar' : 'header-bar-close'}
      >
        <span onClick={this.handleFoldIconClick}>
          {this.props.isMenuFold ? (
            <Icon type='menu-fold' />
          ) : (
            <Icon type='menu-unfold' />
          )}
        </span>
        <div className='right-content'>{RightContent}</div>
      </div>
    );
  }
}

export default Header;
