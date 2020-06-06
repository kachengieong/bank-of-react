import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      accountBalance: null,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      debitEntries: {
        entries: []
      }
    }
  }
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName=logInInfo.userName
    this.setState({currentUser:newUser})
  }
  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent=() => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn= {this.mockLogIn} {...this.props}/>)
    const DebitComponent = () => (<Debits debits = {this.state.debitEntries} />)
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent} />
          <Route exact path="/login" render={LogInComponent} />
          <Route exact path='/debits' render={DebitComponent} />
          <Route exact path='/credits' component={Credits} />
        </div>
      </Router>
    );
  }
}

export default App;
