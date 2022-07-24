import React, { useEffect } from "react";
import WesterFilterComponent from "./filterWomenWestern";
import ProductSimple from "./ProductSimple";
import {  Stack, Box, Flex} from "@chakra-ui/react"
import { useSelector,useDispatch } from "react-redux";
import { fetchData2 } from "../Redux/products/action";
import {useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom"
import { Navbar } from "./Navbar";
import Footer from "./footer";
const WomenWesternProducts=()=>{

  const products2=useSelector((store)=>store.ecommerceData.products2);
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams()
  useEffect(()=>{
    if(products2?.length===0){
      let params={
        category:searchParams.getAll('category')
      }
         dispatch(fetchData2(params))
    }
  },[dispatch,products2?.length, searchParams ])
  console.log(products2)
    return(
      <>
      <Navbar/>
      <div className='homeContainer'>
      <Box>
        <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
        <Box minWidth={'15rem'}>
           <WesterFilterComponent/>
        </Box>
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products2.map(product2=>{
              return <Link to={`/product2/${product2.id}`}key={product2.id}><ProductSimple  image={product2.image} title={product2.title} price={product2.price}  oprice={product2.oprice} /></Link>
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

export {WomenWesternProducts}