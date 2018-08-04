import React from 'react';
import { connect } from 'react-redux'
import * as AuthAction from '../../actions/AuthAction'

class Dashboard extends React.Component {
  handleLogout() {
    this.props.dispatch(AuthAction.logout())
  }
  
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => this.handleLogout()}>
          logout
        </button>
      </div>
    )
  }
  
}

export default connect()(Dashboard)