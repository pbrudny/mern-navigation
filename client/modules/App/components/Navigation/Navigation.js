import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Navigation = props => (
  <div>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
    {props.children}
  </div>
);

Navigation.propTypes = {
};

export default Navigation;
