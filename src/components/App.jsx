import React, {Component, PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header username={this.props.username} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  username: PropTypes.string,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    username: state.username
  };
}

export default connect(mapStateToProps)(App);
