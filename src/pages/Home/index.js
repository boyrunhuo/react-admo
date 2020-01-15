import React from 'react';
import './index.scss'
import { Table, Divider, Tag, Button, Icon, Modal } from 'antd';
import AddData from './AddData'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      visible: false
    };
  }
  componentWillMount() {
    this.getData()
  }
  getData = () => {
    this.$http.get('/api/getHomeDate').then(res => {
      this.setState({ dataSource: res.data.dataSource })
    });
  }
  addData = () => {
    console.log('addData')
    this.setState({
      visible:true
    })
  }
  handleOk = (e) => {
    this.setState({
      visible: false,
    })
  }
  handleCancel = e => {
    this.setState({
      visible: false,
    })
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type='vertical' />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    return (
      <div id="home">
        <p>首页</p>
        <Button id="addDataBtn" type="primary" onClick={this.addData}>加载数据<Icon type="plus" /></Button>
        <Table dataSource={this.state.dataSource} columns={columns} />
        <Modal
          title="添加数据"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <AddData />
        </Modal>
      </div>
    );
  }
}

export default Home;
