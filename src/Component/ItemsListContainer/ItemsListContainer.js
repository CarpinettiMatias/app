import React from 'react';


const ItemsListContainer = (props) => {
        return(
            <div className='ItemsListContainer'>
            <h1>{props.greeting}</h1>
                <ul className='ItemsList'>
                        <li className='Item'>{props.producto}</li>
                </ul>
            </div>
        )
}

export default ItemsListContainer;
