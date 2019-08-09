import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData() {
    axios.get('/api/getHomeDate').then(res => {
      console.log('res', res);
    });
  }
  render() {
    return (
      <div>
        <p>首页</p>
        <button onClick={this.getData}>获取数据</button>
      </div>
    );
  }
}

export default Home;
