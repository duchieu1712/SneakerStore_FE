import React from 'react'
import {BrowserRouter, Route, Link, Routes, Navigate} from 'react-router-dom'
import Products from '../Components/Products/Products'
import AdminLayout from '../Layouts/AdminLayout/AdminLayout'
import HomeLayout from '../Layouts/HomeLayout/HomeLayout'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout/>}>
                    <Route path="/" element={<Products/>}/>
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
