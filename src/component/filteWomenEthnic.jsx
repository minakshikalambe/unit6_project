import React, {useEffect, useState} from "react";
import{Box,Text} from"@chakra-ui/react";
import{useSearchParams} from"react-router-dom"
import {useDispatch } from "react-redux";
import { Checkbox, CheckboxGroup, VStack} from '@chakra-ui/react'
import { fetchData1 } from "../Redux/products/action";
const EthnicFilterComponent=()=>{
    const[serchParams, setSaerchParams]=useSearchParams()
    const dispatch=useDispatch()
    console.log(serchParams)
    const[categoryValues,setCategoryValues]=useState(serchParams.getAll('category')||[])
    const categoryHandler=(value)=>{
        console.log(value)
          setCategoryValues(value)
    }
    useEffect(()=>{
        if(categoryValues){
            setSaerchParams({category:categoryValues},{replace:true})
            let params={
                category:serchParams.getAll('category')
            }
            dispatch(fetchData1(params))
        }
    },[categoryValues,setCategoryValues,setSaerchParams])
    return<Box>
      <Box display={{base:"none",md:"block"}} p="1rem 2rem">
        <Text fontSize="2xl">Filter</Text>
        <Text>Category</Text>
        <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"}>
    <Checkbox value="kurti">Kurti's</Checkbox>
    <Checkbox value="saree">Saree's</Checkbox>
  </VStack>
</CheckboxGroup>
      </Box>
    </Box>
}
export default EthnicFilterComponent