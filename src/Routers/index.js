import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Products from '../Components/Products/Products'
import AdminLayout from '../Layouts/AdminLayout/AdminLayout'
import HomeLayout from '../Layouts/HomeLayout/HomeLayout'
import Checkout from '../Pages/Checkout/Checkout'
import Home from '../Pages/Home/Home'
import ProductAdmin from '../Pages/ProductAdmin/ProductAdmin'
import ProductDetail from '../Pages/ProductDetail/ProductDetail'
import ProductFilters from '../Pages/ProductFilters/ProductFilters'
import UserAdmin from '../Pages/UserAdmin/UserAdmin'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Products/>}/>
                    <Route path='/productFilters' element={<ProductFilters/>} />
                    <Route path='/productDetail' element={<ProductDetail/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                    <Route path="/admin/user" element={<UserAdmin/>}/>
                    <Route path="/admin/product" element={<ProductAdmin/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
