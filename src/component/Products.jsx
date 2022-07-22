import React, { useEffect } from "react";
import FilterComponent from "./FilterComponent";
import ProductSimple from "./ProductSimple";
import {  Stack, Box, Flex, Heading,} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom"
const HomeProducts=()=>{

  const products=useSelector((store)=>store.ecommerceData.products);
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams()
  useEffect(()=>{
    if(products?.length===0){
      let params={
        category:searchParams.getAll('category')
      }
         dispatch(fetchData(params))
    }
  },[dispatch,products?.length, searchParams ])
  console.log(products)
    return(
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minWidth={'15rem'}>
           <FilterComponent/>
        </Box>
        <Box>
          <Heading as="h3">Products</Heading>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map(product=>{
              return <Link to={`/product/${product.id}`}><ProductSimple key={product.id} image={product.image} title={product.title} price={product.price} /></Link>
            })}
          </Flex>
        </Box>
        </Stack>
      </Box>
    )
}

export {HomeProducts}