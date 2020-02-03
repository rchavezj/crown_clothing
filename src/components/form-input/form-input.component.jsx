import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} />
        </div>
    );
};