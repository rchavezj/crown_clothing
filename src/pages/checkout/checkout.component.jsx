import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reslect';

import {  } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = () => (
    <div className="checkout-page">
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
        </div>
    </div>
);

export default CheckoutPage;