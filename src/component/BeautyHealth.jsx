import React, { useEffect } from "react";
import BeautyFilterComponent from "./filterbEauty";
import ProductSimple from "./ProductSimple";
import {  Stack, Box, Flex} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData5 } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar";
import Footer from "./footer";
const BeautyProducts=()=>{

  const products5=useSelector((store)=>store.ecommerceData.products5);
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams()
  useEffect(()=>{
    if(products5?.length===0){
      let params={
        category:searchParams.getAll('category')
      }
         dispatch(fetchData5(params))
    }
  },[dispatch,products5?.length, searchParams ])
  console.log(products5)
    return(
      <>
      <Navbar/>
      <div className='homeContainer'>
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minWidth={'15rem'}>
           <BeautyFilterComponent/>
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products5.map(product5=>{
              return <Link to={`/product5/${product5.id}`}key={product5.id}><ProductSimple  image={product5.image} title={product5.title} price={product5.price} oprice={product5.oprice} /></Link>
            })}
          </Flex>
        </Box>
        </Stack>
      </Box>
      </div>
      <Footer/>
      </>
    )
}

export {BeautyProducts}