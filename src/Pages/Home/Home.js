import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import ProductList from '../../Components/ProductList/ProductList'
import './Home.css'

export default function Home() {
  
  return (
    <>
    <div><Carousel/></div>
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center mt-6">Sản phẩm mới</h1>
    <div><ProductList/></div>
    </>
  )
}
