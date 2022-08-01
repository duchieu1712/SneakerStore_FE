import React, { useState } from 'react'
import {Outlet} from 'react-router-dom'
import Cart from '../../Components/Cart/Cart'
import Header from '../../Components/Header/Header'

export default function HomeLayout() {
    const [openCart, setOpenCart] = useState(false);
    const handleOpenCart = () => {
        setOpenCart(!openCart)
    }
    return (
        <>
        <Header onHandleCart={()=>handleOpenCart()}/>
        <Cart onCartOpen={openCart} onCartClose={()=>handleOpenCart()}/>
        <Outlet/>
        
        </>
    )
}
