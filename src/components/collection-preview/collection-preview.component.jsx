import React from "react";
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = (props) => {
    return (
      <div className='collection-preview'>
        <h1 className='title'>{props.title.toUpperCase()}</h1>
        <div className='preview'>{
          props.items
            .filter((item, idx) => idx < 4)
            .map(
              ({id, ...otherProps}) => (
                <CollectionItem key={id} {...otherProps}/> 
              ) 
            ) 
          }</div>
      </div>
    )
}


export default CollectionPreview;