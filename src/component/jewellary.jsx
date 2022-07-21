import React, { useEffect } from "react";
import JwellaryFilterComponent from "./filterJwellary";
import ProductSimple from "./ProductSimple";
import {  Stack, Box, Flex, Heading,} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData3 } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar";
import Footer from "./footer";
const JewellaryProducts=()=>{

  const products3=useSelector((store)=>store.ecommerceData.products3);
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams()
  useEffect(()=>{
    if(products3?.length===0){
      let params={
        category:searchParams.getAll('category')
      }
         dispatch(fetchData3(params))
    }
  },[dispatch,products3?.length, searchParams ])
  console.log(products3)
    return(
      <>
      <Navbar/>
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minWidth={'15rem'}>
           <JwellaryFilterComponent/>
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products3.map(product3=>{
              return <Link to={`/product3/${product3.id}`}key={product3.id}><ProductSimple  image={product3.image} title={product3.title} price={product3.price} /></Link>
            })}
          </Flex>
        </Box>
        </Stack>
      </Box>
      <Footer/>
      </>
    )
}

export {JewellaryProducts}