import React from 'react'
import { AddShoppingCart, ImportExportRounded } from '@material-ui/icons'
import { IconButton } from '@mui/material/IconButton'



const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <IconButton color='secondary' aria-label='add to shopping cart'><AddShoppingCart /></IconButton>
        </div>
    )
}

export default CartWidget;
