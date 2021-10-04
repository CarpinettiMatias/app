import React from 'react';
import img from './IconsCart.png'


const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <h2><img src={img} alt="CartAdd" width='40px' /></h2>
        </div>
    )
}
export default CartWidget;