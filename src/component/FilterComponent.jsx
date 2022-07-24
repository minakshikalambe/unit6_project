import React, {useEffect, useState} from "react";
import{Box,Text} from"@chakra-ui/react";
import{useSearchParams} from"react-router-dom"
import {useDispatch } from "react-redux";
import { Checkbox, CheckboxGroup, VStack } from '@chakra-ui/react'
import { fetchData } from "../Redux/products/action";
const FilterComponent=()=>{
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
            dispatch(fetchData(params))
        }
    },[categoryValues,setCategoryValues,setSaerchParams])
    return<Box>
      <Box display={{base:"none",md:"block"}} p="1rem 2rem">
        <Text fontSize="2xl">Filter</Text>
        <Text>Category</Text>
        <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"}>
    <Checkbox value="men's clothing">Men's clothing</Checkbox>
    <Checkbox value="women's clothing">Women's clothings</Checkbox>
    <Checkbox value="jewelery">Jewelery</Checkbox>
    <Checkbox value='electronics'>Electronic</Checkbox>
    <Checkbox value='bags'>Bags</Checkbox>
  </VStack>
</CheckboxGroup>
      </Box>
    </Box>
}
export default FilterComponent