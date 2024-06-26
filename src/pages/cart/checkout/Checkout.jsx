import React, { memo, useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import TotalAmount from '../../../components/total-amount';
import './checkout.scss'

const Checkout = () => {
    const [show, setShow] = useState(false)

    console.log(show);
    return (
        <div className='checkout-container'>
            <div className="checkout-container-left">
                <div className="flex">
                    <div className='checkout-container-left-div'>
                        <p className='checkout-container-left-div-title'>
                            <BiArrowBack color='gray' fontSize={25} />
                            <span>Checkout</span>
                        </p>
                        <button className='left-div-btns'>
                            <p className={`bg-btns ${!show ? 'bg-btnsbtnAtice' : ''}`} onClick={() => setShow(p => !p)} ></p>
                            <p className='bg-btns'></p>
                        </button>
                    </div>
                </div>

                <h2 className='checkout-container-left-h2'>Personal info</h2>
                <form className="checkout-container-left-form-1">
                    <label htmlFor=""> Name
                        <input type="text" name="" placeholder="Your name" />
                    </label>
                    <label htmlFor=""> Phone Number
                        <input type="text" name="" placeholder="Your number" />
                    </label>
                </form>

                <h2 className='checkout-container-left-h2'>Adress</h2>
                <form action="checkout-container-left-form-2">
                    <label className='label' htmlFor=""> <span>State</span>
                        <input type="text" name="" placeholder="Name of state" />
                    </label>
                    <label className='label' htmlFor=""> <span>Sity</span>
                        <input type="text" name="" placeholder="Name of sity" />
                    </label>
                    <label className='label' htmlFor=""> <span>Adress</span>
                        <input type="text" name="" placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063" />
                    </label>
                    <label className='label' htmlFor=""> <span>ZIP code</span>
                        <input type="text" name="" placeholder="ZIP code" />
                    </label>
                </form>

                <button className='checkout-container-left-btn'>Continue</button>
            </div>
            <div className="checkout-container-right">
                <h4 className='checkout-container-right-h4'>Your cart</h4>
                <p className='checkout-container-right-p'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
                <p className='checkout-container-right-p2'>$12.56</p>
                <hr />
                <p className='checkout-container-right-p'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
                <p className='checkout-container-right-p2'>$12.56</p>
                <hr />
                <p className='checkout-container-right-p'>SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting</p>
                <p className='checkout-container-right-p2'>$12.56</p>
                <hr />
                <TotalAmount name={'Total amount'} price={'$12.56'} />
            </div>
        </div>
    )
}

export default memo(Checkout)