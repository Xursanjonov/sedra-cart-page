import React, { memo } from 'react'
import '../../pages/cart/cart.scss'

const TotalAmount = ({ name, price }) => {
    return (
        <div className='cart-right-items'>
            <p className='cart-right-items-p'>{name ? name : ''}</p>
            <h5 className='cart-right-items-h5'>{price}</h5>
        </div>
    )
}

export default memo(TotalAmount)