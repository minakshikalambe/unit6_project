import React, { useEffect } from "react";
import{Box, Text} from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { fetchOrder } from "../Redux/products/action";
import ProductSimple from "./ProductSimple";
import Footer from "./footer";
import { Navbar } from "./Navbar";
export const Order=()=>{
    const dispatch=useDispatch()
    const orders=useSelector(store=>store.ecommerceData.orders)
    useEffect(()=>{
      dispatch(fetchOrder())
    },[dispatch])
    return(
        <>
        <Navbar/>
        <Box>
            <Text as="h4" size="2xl" textAlign={"center"} color="rgb(244,51,151)" fontWeight={"bold"}>Placed Order</Text>
            <Box>{orders.map(product=>{
                return <ProductSimple key={product.id} image={product.image} title={product.title} price={product.price}/>
            })}</Box>
        </Box>
        <Footer/>
        </>
    )
}