import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Outlet} from 'react-router-dom'
import Cart from '../../Components/Cart/Cart'
import Header from '../../Components/Header/Header'
import { getCategories } from '../../Redux/Actions/category';

export default function HomeLayout() {
    const dispatch = useDispatch();
    const [openCart, setOpenCart] = useState(false);
    const handleOpenCart = () => {
        setOpenCart(!openCart)
    }
    useEffect(() => {
        dispatch(getCategories());
        // eslint-disable-next-line
      }, []);
      const { categories } = useSelector((state) => state.categoryReducer);
    return (
        <>
        <Header onHandleCart={()=>handleOpenCart()} categories={categories}/>
        <Cart onCartOpen={openCart} onCartClose={()=>handleOpenCart()}/>
        <Outlet/>
        
        </>
    )
}
