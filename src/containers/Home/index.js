import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet';
if(process.env.WEBPACK) require('./index.scss');

import * as AuthAction from '../../actions/AuthAction'

class Home extends React.Component{
  handlePush() {
    this.props.dispatch(AuthAction.login())
    this.props.history.push('/dashboard')
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="home">
        <Helmet title='Home' />
        <h1>Home Screen</h1>
        <button onClick={() => this.handlePush()}>
          Login
        </button>
      </div>
    );
  }
  
} 

export default connect((state) => ({
  auth: state.auth
}))(Home);