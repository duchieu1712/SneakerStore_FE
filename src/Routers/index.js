import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/signIn" element={<SignIn />} />
          <Route path="/auth/signUp" element={<SignUp />} />
          <Route path="/auth/forgotPassword" element={<ForgotPassword />} /> 
        </Route>
      </Routes>

      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/search/:key" element={<SearchProduct />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/settings" element={<UserSettings />} />
        </Route>
      </Routes>

      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/user"
            element={
              <AdminRoute>
                <UserAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/product"
            element={
              <AdminRoute>
                <ProductAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/category"
            element={
              <AdminRoute>
                <CategoryAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/brand"
            element={
              <AdminRoute>
                <BrandAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/delivery"
            element={
              <AdminRoute>
                <DeliveryAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/discount"
            element={
              <AdminRoute>
                <DiscountAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/order"
            element={
              <AdminRoute>
                <OrderAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/orderDetail"
            element={
              <AdminRoute>
                <OrderDetailAdmin />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <AdminRoute>
                <AdminSettings />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
