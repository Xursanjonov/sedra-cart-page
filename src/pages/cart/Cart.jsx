import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from './CartProduct'
import TotalAmount from '../../components/total-amount'
import Checkout from './checkout/Checkout'
import cartEmpty from '../../assets/images/cart-empty.jpg'
import { useNavigate } from 'react-router-dom/dist'
import './cart.scss'

const Cart = () => {
  // const [open, setOpen] = useState(false)
  const { totalCount, value: carts, totalPrice } = useSelector(state => state?.cartData)
  const navigate = useNavigate()

  return !carts.length ? (
    <div key={'cart-emptys-img'} className='cart-emptys-div'>
      <figure className='cart-emptys-figure'>
        <img src={cartEmpty} className='cart-emptys-img' alt="" />
      </figure>
      <button onClick={() => navigate('/all-products')} className='cart-emptys-btn'>Go Shop</button>
    </div>
  ) : ((
    <div className='cart-container'>
      <div className="cart-left">
        <div className='cart-title'>
          <h3 className='cart-title-h4'>Your cart.</h3>
          <p className='cart-title-p'>{totalCount.brm()} items</p>
        </div>
        <hr />
        <div className='cart-name'>
          <h3 className='cart-name-h3'>PRODUCT DETAILS</h3>
          <div className="cart-name-list">
            <p className='cart-title-p'>AMOUNT</p>
            <p className='cart-title-p'>PRICE</p>
            <p className='cart-title-p'>TOTAL</p>
          </div>
        </div>
        {
          carts?.map(cart => (
            <CartProduct key={cart?.id} cart={cart} />
          ))
        }
        <button className='cart-left-btn'>Continue shopping</button>
      </div>
      <div className="cart-right">
        <h4 className='cart-right-h4'>Order summary</h4>
        <div className='cart-right-items'>
          <p className='cart-right-items-p'>{totalCount.brm()} ITEMS</p>
          <h5 className='cart-right-items-h5'>${totalPrice.brm()}</h5>
        </div>
        <select className='cart-right-select' name="" id="">
          <option value="shopping"> Type of delievery Shipping</option>
          <option value="shopping">shopping</option>
          <option value="shopping">shopping</option>
        </select>
        <label htmlFor="promocode" className='cart-product-right-label'>
          Promocode <input type="text" name="" id="promocode" placeholder='Promocode' />
        </label>
        <hr />
        <TotalAmount key={'3'} name={'Total amount'} price={`$${totalPrice.brm()}`} />
        <button className='cart-right-btn' type='button'>Checkout</button>
      </div>
    </div>
  ))
}

export default Cart