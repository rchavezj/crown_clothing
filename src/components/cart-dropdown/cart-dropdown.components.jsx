import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {<CartItemTernaryList cartItems={cartItems} />}
    </div>
    <CustomButton 
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden()); 
      }}
    >
      Go to checkout
    </CustomButton>
  </div>
);




const CartItemTernaryList = ({ cartItems }) =>(
    cartItems.length ? <CartItemList cartItems={cartItems} /> : <CartItemEmpty />
); 
const CartItemList = ({ cartItems }) => (
    cartItems.map(
        cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        )
    )
); 
const CartItemEmpty = () => ( <span className="empty-message"> Your cart is empty</span> );





const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps)(CartDropdown));