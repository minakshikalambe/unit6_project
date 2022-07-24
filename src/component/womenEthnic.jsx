import React, { useEffect } from "react";
import EthnicFilterComponent from "./filteWomenEthnic";
import ProductSimple from "./ProductSimple";
import {  Stack, Box, Flex} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData1 } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar";
import Footer from "./footer";
const WomenEthnicProducts=()=>{

  const products1=useSelector((store)=>store.ecommerceData.products1);
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams()
  useEffect(()=>{
    if(products1?.length===0){
      let params={
        category:searchParams.getAll('category')
      }
         dispatch(fetchData1(params))
    }
  },[dispatch,products1?.length, searchParams ])
  console.log(products1)
    return(
      <>
      <Navbar/>
      <div className='homeContainer'>
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minWidth={'15rem'}>
           <EthnicFilterComponent/>
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products1.map(product1=>{
              return <Link to={`/product1/${product1.id}`}key={product1.id}><ProductSimple  image={product1.image} title={product1.title} price={product1.price}  oprice={product1.oprice}/></Link>
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

export {WomenEthnicProducts}