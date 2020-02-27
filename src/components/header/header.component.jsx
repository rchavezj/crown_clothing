import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CardIcon from '../cart-icon/cart-icon.components';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from "../cart-dropdown/cart-dropdown.components";

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            Shop
          </Link>
          <Link className="option" to="/shop">
            Contact
          </Link>
          {currentUser ? <SignOut /> : <SignIn />}
          <CardIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
};

const SignOut = () => (
  <div className="option" onClick={() => auth.signOut()}>
    Sign Out
  </div>
);

const SignIn = () => (
  <Link className="option" to="/signin">
    Sign In
  </Link>
);

// Function access the state
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  // currentUser: state.user.currentUser
  currentUser, hidden
});

export default connect(mapStateToProps)(Header);