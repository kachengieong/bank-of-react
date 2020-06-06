import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="App">
                <img src="https://img.etimg.com/thumb/msid-71487585,width-300,imgsize-169788,resizemode-4/bank-getty.jpg" 
                alt="bank" />
                <h1>Bank of React</h1>
                
                <Link to="/login">Login</Link>{" "}
                <Link to="/userProfile">User Profile</Link>{" "}
                <Link to="/debits">Debits</Link>{" "}
                <Link to="/credits">Credits</Link>{" "}

                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default Home;