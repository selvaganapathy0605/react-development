import React from 'react'
import profile from '/images/profile.png'
import '../index.css'
import { useState } from 'react';
import Cart from './Cart';
import { useEffect } from 'react';
import data from '../../data.json'

function ProfileCart() {
    const [active, setActive] = useState('daily');

    const [datas] = useState(data);

    useEffect(() => {
        fetch('../data.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error loading JSON:", error));
    }, []);

    return (
        <>
            <div className='profile-cart'>
                <div className="profile">
                    <img src={profile} alt="" />
                    <div>
                        <p className='lite'>Report for</p>
                        <h1 className='dark name'>Jeremy Robson</h1>
                    </div>
                </div>
                <div className="report-timing">
                    <p onClick={(e) => setActive("daily")} className={active === 'daily' ? "dark" : "lite"} >Daily</p>
                    <p onClick={(e) => setActive("weekly")} className={active === 'weekly' ? "dark" : "lite"} >Weekly</p>
                    <p onClick={(e) => setActive("monthly")} className={active === 'monthly' ? "dark" : "lite"} >Monthly</p>
                </div>
            </div>
            <div className='cart-container'>
            {
                data.map((item, index) => (
                    <Cart key={index} props={item} active={active} />
                ))
            }
            </div>
        </>

    )
}

export default ProfileCart
