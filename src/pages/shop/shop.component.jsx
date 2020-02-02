// JS Libraries
import React from 'react';
// Internal Data
import SHOP_DATA from './shop.data.js';
// Components
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>{
                collections.map(
                    ({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}/>
                    )
                )
            }</div>
        )
    }
}


export default ShopPage;