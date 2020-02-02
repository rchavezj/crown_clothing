import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = (props) => {
    console.log(`============`);
    console.log(`url(.${props.imageUrl})`);
    console.log(`============`);
    console.log(`\n`);
    return(
        <div className='collection-item'>
            <div
                className='image'
                style={{ background: `url(${props.imageUrl})`}}
            />
            
            <div className='collection-footer'>
                <span className='name'> { props.name } </span>
                <span className='price'> { props.price } </span>
            </div>
        </div>
    );
}; 

export default CollectionItem;