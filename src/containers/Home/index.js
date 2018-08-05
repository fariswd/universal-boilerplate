import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet';
if(process.env.WEBPACK) require('./index.scss');

import * as AuthAction from '../../actions/AuthAction'

class Home extends React.Component{
  handlePush() {
    this.props.login(this.props.history)
  }
  
  render() {
    const { auth } = this.props
    console.log('auth', auth)
    return (
      <div className="home">
        <Helmet title='Home' />
        <h1>Home Screen</h1>
        <button className="btn btn-lg" style={{width: 200, height: 50}} onClick={() => this.handlePush()}>
          Login {auth.loading && 'Loading...'}
        </button>
      </div>
    );
  }
} 

export default connect(state => ({
  auth: state.auth
}), dispatch => ({
  login: (history) => dispatch(AuthAction.login(history))
}))(Home);