import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AdminLayout from '../Layouts/AdminLayout/AdminLayout'
import HomeLayout from '../Layouts/HomeLayout/HomeLayout'
import Checkout from '../Pages/Checkout/Checkout'
import Home from '../Pages/Home/Home'
import ProductAdmin from '../Pages/ProductAdmin/ProductAdmin'
import ProductDetail from '../Pages/ProductDetail/ProductDetail'
import AllProducts from '../Pages/AllProducts/AllProducts'
import UserAdmin from '../Pages/UserAdmin/UserAdmin'
import SearchProduct from '../Pages/SearchProduct/SearchProduct'
import CategoryAdmin from '../Pages/CategoryAdmin/CategoryAdmin'
import BrandAdmin from '../Pages/BrandAdmin/BrandAdmin'
import DeliveryAdmin from '../Pages/DeliveryAdmin/DeliveryAdmin'
import DiscountAdmin from '../Pages/DiscountAdmin/DiscountAdmin'
import OrderAdmin from '../Pages/OrderAdmin/OrderAdmin'
import OrderDetailAdmin from '../Pages/OrderDetailAdmin/OrderDetailAdmin'
import AdminSettings from '../Pages/AdminSettings/AdminSettings'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path='/allProducts' element={<AllProducts/>} />
                    <Route path='/search/:key' element={<SearchProduct/>} />
                    <Route path='/productDetail' element={<ProductDetail/>} />
                    <Route path='/checkout' element={<Checkout/>} />
                </Route>
            </Routes>
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}>
                    <Route path="/admin/user" element={<UserAdmin/>}/>
                    <Route path="/admin/product" element={<ProductAdmin/>}/>
                    <Route path="/admin/category" element={<CategoryAdmin/>}/>
                    <Route path="/admin/brand" element={<BrandAdmin/>}/>
                    <Route path="/admin/delivery" element={<DeliveryAdmin/>}/>
                    <Route path="/admin/discount" element={<DiscountAdmin/>}/>
                    <Route path="/admin/order" element={<OrderAdmin/>}/>
                    <Route path="/admin/orderDetail" element={<OrderDetailAdmin/>}/>
                    <Route path="/admin/settings" element={<AdminSettings/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
