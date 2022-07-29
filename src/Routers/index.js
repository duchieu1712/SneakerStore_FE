import React from 'react'
import {BrowserRouter, Route, Link, Routes, Navigate} from 'react-router-dom'
import Header from '../Components/Header/Header'
import Products from '../Components/Products'

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header/>}/>
            </Routes>
            <Routes>
                <Route path="/product" element={<Products/>}/>
            </Routes>
        </BrowserRouter>
    )
}
