import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/shop'>
                    Contact
                </Link>
                <Link className='option' to='/signin'>
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default Header;