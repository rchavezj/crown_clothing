import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CardIcon from '../cart-icon/cart-icon.components';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

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
const mapStateToProps = createStructuredSelector ({
  hidden: selectCartHidden,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Header);