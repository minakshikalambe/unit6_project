import React from "react";
import { Box,Heading, Stack ,Image, Text, useColorModeValue, Button} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, deletProductCart } from "../Redux/products/action";
import CheckOut from "./checkout";
import { Navbar } from "./Navbar";
import Footer from "./footer";
const Cart =()=>{
    const cart=useSelector((store)=>store.ecommerceData.cart)
    const dispatch=useDispatch()
    const removeProduct=(id)=>{
        dispatch(deletProductCart(id))
    }
const checkoutHandler=()=>{
    dispatch(addOrder(cart))
}    
    return <Box>
        <Navbar/>
        {cart.length && cart.map(product=>{
             return<CartItem key={product.id} title={product.title}
             price={product.price}
             description={product.description}
             image={product.image}
             id={product.id}
             removeProduct={removeProduct}/>
        })}
      <CheckOut cart={cart} checkoutHandler={checkoutHandler}/>
 <Footer/>
    </Box>
    
}


function CartItem({title,image,description,price,id,removeProduct}){


    return(
        <Box  rounded="lg" width={"fit-content"} margin="auto" marginBottom="2rem">
            <Stack direction={{base:"coloumn",md:"row"}}>
            <Box  height={"300px"} width="300px" posotion="relative"
            padding={"0 1rem"} 
                _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '80%',
            h: '80%',
            pos: 'absolute',
            top: "50%",
            left: "50%",
            transform:"translate(-50%, -50%)",
            filter: 'blur(15px)',
            zIndex: -1,
          }} >
            <Image
            rounded={'lg'}
            height={300}
            width={300}
            objectFit={'container'}
            src={image}
          />
            </Box>
            <Box height={"300px"} width="300px">
                <Stack p={4}>
                <Heading as="h5" size="lg" >{title}</Heading>
                <Box overflow={'hidden'} whiteSpace="nowrap" > 
                <Text >{description}
                </Text>
                </Box>
                <Text
                     color="black"
                     fontWeight={300}
                     fontSize={'2xl'}>{price}</Text>
                     <Button varient={'outline'} leftIcon={<DeleteIcon/>}
                    style={{backgroundColor:"rgb(244,51,151)"}}
                    color="white"
                     onClick={()=>removeProduct(id)}>Remove</Button>
                </Stack>
            </Box>
            </Stack>
        </Box>
    )
}
export default Cart