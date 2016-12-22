import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Home Page</h1>
        <p>React, Redux, React Router template in ES6</p>
        <Link to="about" className="btn btn-primary btn-lg">About page</Link>
      </div>
    );
  }
}

export default HomePage;
