import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import { Menu, Icon } from 'antd';

class Sidebar extends React.Component {
  render() {
    return (
      <div className='side-bar'>
        <Menu
          defaultSelectedKeys={['home']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          theme='dark'
          inlineCollapsed={!this.props.isMenuFold}
        >
          <Menu.Item key='home'>
            <Link to='/'>
              <Icon type='home' />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key='user'>
            <Link to='/user'>
              <Icon type='user' />
              <span>用户页</span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key='sub1'
            title={
              <span>
                <Icon type='mail' />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key='5'>Option 5</Menu.Item>
            <Menu.Item key='6'>Option 6</Menu.Item>
            <Menu.Item key='7'>Option 7</Menu.Item>
            <Menu.Item key='8'>Option 8</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
