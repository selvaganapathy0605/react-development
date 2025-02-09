import React, { useState } from 'react'
import '../index.css'

function Cart({ props ,active}) {
    
    return (
        <div className='cart-bg' style={{ backgroundColor: props.color, backgroundImage: `url(${props.img})` }}>
            <div className='cart-details'>
                <div className='details-div'>
                    <h2 className='title dark'>{props.title}</h2>
                    <p className='dots lite'>...</p>
                </div>
                <div className='details-div'>
                    <h1 className='cur-hours dark'>{props.timeframes[active].current} hrs</h1>
                    <h3 className="prev-hours lite">Last Week-{props.timeframes[active].previous} hrs</h3>
                </div>
            </div>
        </div>
    )
}

export default Cart
