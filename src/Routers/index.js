import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import ProductAdmin from "../Pages/ProductAdmin/ProductAdmin";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import AllProducts from "../Pages/AllProducts/AllProducts";
import UserAdmin from "../Pages/UserAdmin/UserAdmin";
import SearchProduct from "../Pages/SearchProduct/SearchProduct";
import CategoryAdmin from "../Pages/CategoryAdmin/CategoryAdmin";
import BrandAdmin from "../Pages/BrandAdmin/BrandAdmin";
import DeliveryAdmin from "../Pages/DeliveryAdmin/DeliveryAdmin";
import DiscountAdmin from "../Pages/DiscountAdmin/DiscountAdmin";
import OrderAdmin from "../Pages/OrderAdmin/OrderAdmin";
import OrderDetailAdmin from "../Pages/OrderDetailAdmin/OrderDetailAdmin";
import AdminSettings from "../Pages/AdminSettings/AdminSettings";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "../Guards/AdminRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserSettings from "../Pages/UserSettings/UserSettings";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import FilterPage from "../Pages/FilterPage/FilterPage";

export default function Routers() {
  return (
    //   <Routes>
    //     <Route path="/admin" element={<AdminLayout />}>
    //       <Route
    //         path="/admin"
    //         element={
    //           <AdminRoute>
    //             <Dashboard />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/user"
    //         element={
    //           <AdminRoute>
    //             <UserAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/product"
    //         element={
    //           <AdminRoute>
    //             <ProductAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/category"
    //         element={
    //           <AdminRoute>
    //             <CategoryAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/brand"
    //         element={
    //           <AdminRoute>
    //             <BrandAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/delivery"
    //         element={
    //           <AdminRoute>
    //             <DeliveryAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/discount"
    //         element={
    //           <AdminRoute>
    //             <DiscountAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/order"
    //         element={
    //           <AdminRoute>
    //             <OrderAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/orderDetail"
    //         element={
    //           <AdminRoute>
    //             <OrderDetailAdmin />
    //           </AdminRoute>
    //         }
    //       />
    //       <Route
    //         path="/admin/settings"
    //         element={
    //           <AdminRoute>
    //             <AdminSettings />
    //           </AdminRoute>
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
      <Switch>
        {/* Route admin */}
        <Route path="/admin">
          <AdminLayout>
            <Switch>
            <Redirect exact from="/admin" to="/admin/dashboard"/>
            <AdminRoute path="/admin/dashboard">
            <Dashboard />
              </AdminRoute>
              <AdminRoute path="/admin/user">
                <UserAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/product">
                <ProductAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/brand">
                <BrandAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/category">
                <CategoryAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/delivery">
                <DeliveryAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/discount">
                <DiscountAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/order">
                <OrderAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/orderDetail">
                <OrderDetailAdmin />
              </AdminRoute>
              <AdminRoute path="/admin/settings">
                <AdminSettings/>
              </AdminRoute>
            </Switch>
          </AdminLayout>
        </Route>
        {/* Route main */}
        <Route path="/auth">
          <AuthLayout>
            <Route path="/auth/signIn">
              <SignIn />
            </Route>
            <Route path="/auth/signUp">
              <SignUp />
            </Route>
            <Route path="/auth/forgotPassword">
              <ForgotPassword />
            </Route>
          </AuthLayout>
        </Route>
        <Route path="/">
          <HomeLayout>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/allproducts" >
                <AllProducts />
              </Route>
              <Route path="*">
                <div style={{ margin: "100px 0" }}>Page not found</div>
              </Route>
            </Switch>
          </HomeLayout>
        </Route>
        {/* <Route path="/detail/:value" component={Detail}/>
    <Route path="/signup" component={SignUp}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/" component={Home}/> */}
      </Switch>
    </BrowserRouter>
  );
}
