import React from 'react';
import Sidebar from './pages/SideBar';
import Header from './pages/Header';
import Content from './pages/Content';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

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
          <Content isMenuFold={this.state.isMenuFold} />
        </Router>
      </div>
    );
  }
}
export default App;

// import React from 'react';
// import logo from './logo.svg';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
