import React from 'react'
import img from '../cartWidget/Iconns.png'

const cartWidget = (props) => {
    return (
        <div className='cartWidget'>
             <h2><img src={img} alt="Iconns" width='50px'/></h2>
        </div>
    )
};

export default cartWidget;
