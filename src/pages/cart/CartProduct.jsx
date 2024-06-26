import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { TiDelete } from "react-icons/ti";
import cartImage from '../../assets/images/cart-imagee.svg'
import { addToShopCount, deleteToCart, removeToShopCount } from '../../context/cartSlice';
import './cart-product.scss'


const CartProduct = ({ cart }) => {
    const dispatch = useDispatch()

    return (
        <div className='cart-product'>
            <button button className='cart-product-x' onClick={() => dispatch(deleteToCart(cart.id))} >
                <TiDelete color='red' fontSize={46} />
            </button >
            <div className="cart-product-div1">
                <h4 className='cart-product-div1-h4'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</h4>
                <figure className='cart-product-div1-img'>
                    <img src={cart?.urls[0]} width={80} height={80} style={{ padding: 2, border: '1px solid gray', borderRadius: 10 }} />
                </figure>
            </div>
            <figure className='cart-product-div1-img-2'>
                <TiDelete className='cart-product-closeBtn' color='red' onClick={() => dispatch(deleteToCart(cart.id))} fontSize={24} />
                <img src={cart?.urls.length ? cart?.urls[0] : cartImage} width={60} height={70} style={{ padding: 2, border: '1px solid gray', borderRadius: 10 }} alt="" />
            </figure>
            <h4 className='cart-product-div1-h4-2'>{cart?.title}</h4>
            <div className="cart-product-div2">
                <p className='div-p'>AMOUNT</p>
                <ul className='cart-product-div2-crud'>
                    <button className='cart-product-div2-crud-btn' onClick={() => dispatch(removeToShopCount(cart?.id))}>-</button>
                    <li className='counter'>{cart?.shopCount}</li>
                    <button className='cart-product-div2-crud-btn' onClick={() => dispatch(addToShopCount(cart?.id))}>+</button>
                </ul>
            </div>
            <div className="cart-product-div3">
                <p className='div-p'>PRICE</p>
                <h5>${(cart?.price * 1).brm()}</h5>
            </div>
            <div className="cart-product-div4">
                <p className='div-p'>TOTAL</p>
                <h5>${((cart?.price) * cart?.shopCount).brm()}</h5>
            </div>
        </div>
    )
}

export default memo(CartProduct)