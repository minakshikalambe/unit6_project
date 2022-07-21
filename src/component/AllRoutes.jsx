import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Homepage} from "./home";
import WoEthincProduct from "./woEthnicProduct";
import { WomenEthnicProducts } from "./womenEthnic";
import { WomenWesternProducts } from "./womenWestern";
import WoWesternProduct from "./woWesternProduct";
import { JewellaryProducts } from "./jewellary";
import JwellaryProduct from "./jewellaryProduct";
import { MenProducts } from "./men";
import MenProduct from "./menProduct";
import Cart from "./cart";
import { Order } from "./order";
// import {Products} from "../Pages/Products";
import Product from "./Product";
import { BeautyProducts } from "./BeautyHealth";
import BeautyProduct from "./BeautyProduct";
import Login from "./Login";
// import Cart from "../Pages/Cart";
// import { Order } from "../Pages/Order";
// import Login from "../Pages/Login";
// import AuthWrapper from "./AuthWrapper";
const AllRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={<Homepage/>}>Home</Route>
        {/* <Route path="/products" element={<Products/>}/> */}
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/product1" element={<WomenEthnicProducts/>}> Women Ethnic</Route>
        <Route path="/product2" element={<WomenWesternProducts/>}> Women Western</Route>
        <Route path="/product3" element={<JewellaryProducts/>}> Jwellary</Route>
        <Route path="/product4" element={<MenProducts/>}>Men</Route>
        <Route path="/product5" element={<BeautyProducts/>}>Beauty</Route>
        <Route path="/cart" element={<Cart/>}>Cart</Route>
        <Route path="/order" element={<Order/>}>Order</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
        <Route path='/login/:name' element={<Login />} />
        <Route path="/product1/:id" element={<WoEthincProduct/>}/>
        <Route path="/product2/:id" element={<WoWesternProduct/>}/>
        <Route path="/product3/:id" element={<JwellaryProduct/>}/>
        <Route path="/product4/:id" element={<MenProduct/>}/>
        <Route path="/product5/:id" element={<BeautyProduct/>}/>
        {/* <Route path="/cart" element={<AuthWrapper><Cart/></AuthWrapper>}/>
        <Route path="/orders" element={<Order/>}/>
        <Route path="/login" element={<Login/>}/> */}
        </Routes>
    )
}
export default AllRoutes