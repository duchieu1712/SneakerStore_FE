import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Products from '../Components/Products/Products'
import AdminLayout from '../Layouts/AdminLayout/AdminLayout'
import HomeLayout from '../Layouts/HomeLayout/HomeLayout'
import Home from '../Pages/Home/Home'
import ProductDetail from '../Pages/ProductDetail/ProductDetail'
import ProductFilters from '../Pages/ProductFilters/ProductFilters'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Products/>}/>
                    <Route path='/productFilters' element={<ProductFilters/>} />
                    <Route path='/productDetail' element={<ProductDetail/>} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                    {/* <Route path="/product" element={<Products/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
