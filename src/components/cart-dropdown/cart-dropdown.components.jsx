import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {<CartItemTernaryList cartItems={cartItems} />}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);



const CartItemTernaryList = ({ cartItems }) =>(
    cartItems.length ? <CartItemList cartItems={cartItems} /> : <CartItemEmpty />
);
const CartItemList = ({ cartItems }) => (
    cartItems.map(
        cartItem => (
            <CartItem 
                item={cartItem} 
                key={cartItem.id} 
            />
        )
    )
);
const CartItemEmpty = () => (
  <span className="empty-message"> Your cart is empty</span>
);


const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
