import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';


const Nav = (props) => (
  <div className="nav">
    <img src={require('./wwBanner.jpg')} className="wwBanner" alt="WhipWorks" />
    <img src={require("./ww.jpg")} className="WWLogo" alt="WhipWorks" />
    <Link to="/home">
      <h2 className="nav-title">Home</h2>
    </Link>
    <Link to="/login">
      <h2 className="nav-title">Login</h2>
    </Link>
    <div className="nav-link-container">
      <Link className="nav-link" to="/bullwhip">
        Design A Bullwhip
      </Link>
      <Link className="nav-link" to="/specialty">
        Specialty Whips
      </Link>
      <Link className="nav-link" to="/gallery">
        Gallery
      </Link>
      <Link className="nav-link" to="/materials">
        Whipmaking Materials
      </Link>
      <Link className="nav-link" to="/video">
        Video
      </Link>
      <Link className="nav-link" to="/checkout">
        Checkout
      </Link>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
