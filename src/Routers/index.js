import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout/AdminLayout";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Checkout from "../Pages/Checkout/Checkout";
import Home from "../Pages/Home/Home";
import ProductAdmin from "../Pages/ProductAdmin/ProductAdmin";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import ListProducts from "../Pages/ListProducts/ListProducts";
import UserAdmin from "../Pages/UserAdmin/UserAdmin";
import CategoryAdmin from "../Pages/CategoryAdmin/CategoryAdmin";
import BrandAdmin from "../Pages/BrandAdmin/BrandAdmin";
import DeliveryAdmin from "../Pages/DeliveryAdmin/DeliveryAdmin";
import DiscountAdmin from "../Pages/DiscountAdmin/DiscountAdmin";
import OrderAdmin from "../Pages/OrderAdmin/OrderAdmin";
import AdminSettings from "../Pages/AdminSettings/AdminSettings";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "../Guards/AdminRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserSettings from "../Pages/UserSettings/UserSettings";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import SizeAdmin from "../Pages/SizeAdmin/SizeAdmin";
import StockAdmin from "../Pages/StockAdmin/StockAdmin";

export default function Routers() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Route admin */}
        <Route path="/admin">
          <AdminLayout>
            <Switch>
              <Redirect exact from="/admin" to="/admin/dashboard" />
              <AdminRoute exact path="/admin/dashboard" component={Dashboard} />

              <AdminRoute exact path="/admin/user" component={UserAdmin} />

              <AdminRoute
                exact
                path="/admin/product"
                component={ProductAdmin}
              />

              <AdminRoute exact path="/admin/brand" component={BrandAdmin} />

              <AdminRoute
                exact
                path="/admin/category"
                component={CategoryAdmin}
              />

              <AdminRoute
                exact
                path="/admin/delivery"
                component={DeliveryAdmin}
              />

              <AdminRoute
                exact
                path="/admin/discount"
                component={DiscountAdmin}
              />

              <AdminRoute exact path="/admin/order" component={OrderAdmin} />
              
              <AdminRoute exact path="/admin/size" component={SizeAdmin} />

              <AdminRoute exact path="/admin/stock" component={StockAdmin} />

              <AdminRoute path="/admin/settings" component={AdminSettings} />
            </Switch>
          </AdminLayout>
        </Route>

        {/* Route auth */}
        <Route path="/auth">
          <AuthLayout>
            <Route exact path="/auth/signIn" component={SignIn} />
            <Route exact path="/auth/signUp" component={SignUp} />
            <Route
              exact
              path="/auth/forgotPassword"
              component={ForgotPassword}
            />
          </AuthLayout>
        </Route>

        {/* Route main */}
        <Route path="/">
          <HomeLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/listProducts" component={ListProducts} />
              <Route exact path="/productDetail/:id" component={ProductDetail} />
              <Route exact path="/userSettings" component={UserSettings} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          </HomeLayout>
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
