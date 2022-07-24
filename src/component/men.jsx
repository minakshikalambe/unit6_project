import React, { useEffect } from "react";
import MenFilterComponent from "./filteMen";
import ProductSimple from "./ProductSimple";
import {  Stack, Box, Flex} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData4 } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom"
import Footer from "./footer";
import { Navbar } from "./Navbar";
const MenProducts=()=>{

  const products4=useSelector((store)=>store.ecommerceData.products4);
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams()
  useEffect(()=>{
    if(products4?.length===0){
      let params={
        category:searchParams.getAll('category')
      }
         dispatch(fetchData4(params))
    }
  },[dispatch,products4?.length, searchParams ])
  console.log(products4)
    return(
      <>
      <Navbar/>
      <div className='homeContainer'>
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minWidth={'15rem'}>
           <MenFilterComponent/>
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products4.map(product4=>{
              return <Link to={`/product4/${product4.id}`}key={product4.id}><ProductSimple  image={product4.image} title={product4.title} price={product4.price} oprice={product4.oprice}/></Link>
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

export {MenProducts}