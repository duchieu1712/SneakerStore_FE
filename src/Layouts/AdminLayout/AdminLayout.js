import React from 'react'
import {Outlet} from 'react-router-dom'
import Admin from '../../Pages/Admin/Admin'


export default function AdminLayout() {
    return (
        <>
        <Admin/>
        <Outlet/>
        </>
    )
}
