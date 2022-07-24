
import  Axios  from 'axios';
import*as types from'./actionTypes';

const fetchDataRequest=(payload)=>{
   return{
    type:types.FETCH_DATA_REQUEST,
    payload
   }
}
const fetchDataSuccess=(payload)=>{
    return{
        type:types.FETCH_DATA_SUCCESS,
        payload
    }
}
const fetchDataFailure=(payload)=>{
    return{
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}
const fetchData =(payload)=>{
    return (dispatch)=>{
    dispatch(fetchDataRequest())
    Axios.get('/products',{
        params:{
            ...payload
        }
    })
    .then(r=>dispatch(fetchDataSuccess(r.data)))
    .catch(e=>dispatch(fetchDataFailure(e.data)))
    };
}

const fetchDataRequest1=(payload)=>{
    return{
     type:types.FETCH_DATA_REQUEST1,
     payload
    }
 }
 const fetchDataSuccess1=(payload)=>{
     return{
         type:types.FETCH_DATA_SUCCESS1,
         payload
     }
 }
 const fetchDataFailure1=(payload)=>{
     return{
         type:types.FETCH_DATA_FAILURE1,
         payload
     }
 }
 const fetchData1 =(payload)=>{
     return (dispatch)=>{
     dispatch(fetchDataRequest1())
     Axios.get('/products1',{
         params:{
             ...payload
         }
     })
     .then(r=>dispatch(fetchDataSuccess1(r.data)))
     .catch(e=>dispatch(fetchDataFailure1(e.data)))
     };
 }

 const fetchDataRequest2=(payload)=>{
    return{
     type:types.FETCH_DATA_REQUEST2,
     payload
    }
 }
 const fetchDataSuccess2=(payload)=>{
     return{
         type:types.FETCH_DATA_SUCCESS2,
         payload
     }
 }
 const fetchDataFailure2=(payload)=>{
     return{
         type:types.FETCH_DATA_FAILURE2,
         payload
     }
 }
 const fetchData2 =(payload)=>{
     return (dispatch)=>{
     dispatch(fetchDataRequest2())
     Axios.get('/products2',{
         params:{
             ...payload
         }
     })
     .then(r=>dispatch(fetchDataSuccess2(r.data)))
     .catch(e=>dispatch(fetchDataFailure2(e.data)))
     };
 }

 const fetchDataRequest3=(payload)=>{
    return{
     type:types.FETCH_DATA_REQUEST3,
     payload
    }
 }
 const fetchDataSuccess3=(payload)=>{
     return{
         type:types.FETCH_DATA_SUCCESS3,
         payload
     }
 }
 const fetchDataFailure3=(payload)=>{
     return{
         type:types.FETCH_DATA_FAILURE3,
         payload
     }
 }
 const fetchData3 =(payload)=>{
     return (dispatch)=>{
     dispatch(fetchDataRequest3())
     Axios.get('/products3',{
         params:{
             ...payload
         }
     })
     .then(r=>dispatch(fetchDataSuccess3(r.data)))
     .catch(e=>dispatch(fetchDataFailure3(e.data)))
     };
 }

 const fetchDataRequest4=(payload)=>{
    return{
     type:types.FETCH_DATA_REQUEST4,
     payload
    }
 }
 const fetchDataSuccess4=(payload)=>{
     return{
         type:types.FETCH_DATA_SUCCESS4,
         payload
     }
 }
 const fetchDataFailure4=(payload)=>{
     return{
         type:types.FETCH_DATA_FAILURE4,
         payload
     }
 }
 const fetchData4 =(payload)=>{
     return (dispatch)=>{
     dispatch(fetchDataRequest4())
     Axios.get('/products4',{
         params:{
             ...payload
         }
     })
     .then(r=>dispatch(fetchDataSuccess4(r.data)))
     .catch(e=>dispatch(fetchDataFailure4(e.data)))
     };
 }

 
 const fetchDataRequest5=(payload)=>{
    return{
     type:types.FETCH_DATA_REQUEST5,
     payload
    }
 }
 const fetchDataSuccess5=(payload)=>{
     return{
         type:types.FETCH_DATA_SUCCESS5,
         payload
     }
 }
 const fetchDataFailure5=(payload)=>{
     return{
         type:types.FETCH_DATA_FAILURE5,
         payload
     }
 }
 const fetchData5 =(payload)=>{
     return (dispatch)=>{
     dispatch(fetchDataRequest5())
     Axios.get('/products5',{
         params:{
             ...payload
         }
     })
     .then(r=>dispatch(fetchDataSuccess5(r.data)))
     .catch(e=>dispatch(fetchDataFailure5(e.data)))
     };
 }
  
 const fetchDataRequest6=(payload)=>{
    return{
     type:types.FETCH_DATA_REQUEST6,
     payload
    }
 }
 const fetchDataSuccess6=(payload)=>{
     return{
         type:types.FETCH_DATA_SUCCESS6,
         payload
     }
 }
 const fetchDataFailure6=(payload)=>{
     return{
         type:types.FETCH_DATA_FAILURE6,
         payload
     }
 }
 const fetchData6 =(payload)=>{
     return (dispatch)=>{
     dispatch(fetchDataRequest6())
     Axios.get('/products6',{
         params:{
             ...payload
         }
     })
     .then(r=>dispatch(fetchDataSuccess6(r.data)))
     .catch(e=>dispatch(fetchDataFailure6(e.data)))
     };
 }
const getSingleProductRequest=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST,
     payload
    }
 }
 const getSingleProductSuccess=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS,
         payload
     }
 }
 const getSingleProductFilure=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE,
         payload
     }
 }
 
 const getSingleProduct =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    Axios.get(`/products/${id}`).then(r=>dispatch(getSingleProductSuccess(r.data))).catch(e=>dispatch(getSingleProductFilure(e.data)))
 }

 const getSingleProductRequest1=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST1,
     payload
    }
 }
 const getSingleProductSuccess1=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS1,
         payload
     }
 }
 const getSingleProductFilure1=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE1,
         payload
     }
 }
 
 const getSingleProduct1 =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest1())
    Axios.get(`/products1/${id}`).then(r=>dispatch(getSingleProductSuccess1(r.data))).catch(e=>dispatch(getSingleProductFilure1(e.data)))
 }

 const getSingleProductRequest2=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST2,
     payload
    }
 }
 const getSingleProductSuccess2=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS2,
         payload
     }
 }
 const getSingleProductFilure2=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE2,
         payload
     }
 }
 
 const getSingleProduct2 =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest2())
    Axios.get(`/products2/${id}`).then(r=>dispatch(getSingleProductSuccess2(r.data))).catch(e=>dispatch(getSingleProductFilure2(e.data)))
 }

 const getSingleProductRequest3=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST3,
     payload
    }
 }
 const getSingleProductSuccess3=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS3,
         payload
     }
 }
 const getSingleProductFilure3=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE3,
         payload
     }
 }
 
 const getSingleProduct3 =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest3())
    Axios.get(`/products3/${id}`).then(r=>dispatch(getSingleProductSuccess3(r.data))).catch(e=>dispatch(getSingleProductFilure3(e.data)))
 }
 const addProductCardRequest=(payload)=>{
    return{
     type:types.ADD_PRODUCT_CART_REQUEST,
     payload
    }
 }

 const getSingleProductRequest4=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST4,
     payload
    }
 }
 const getSingleProductSuccess4=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS4,
         payload
     }
 }
 const getSingleProductFilure4=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE4,
         payload
     }
 }
 
 const getSingleProduct4 =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest4())
    Axios.get(`/products4/${id}`).then(r=>dispatch(getSingleProductSuccess4(r.data))).catch(e=>dispatch(getSingleProductFilure4(e.data)))
 }

 const getSingleProductRequest5=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST5,
     payload
    }
 }
 const getSingleProductSuccess5=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS5,
         payload
     }
 }
 const getSingleProductFilure5=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE5,
         payload
     }
 }
 
 const getSingleProduct5 =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest5())
    Axios.get(`/products5/${id}`).then(r=>dispatch(getSingleProductSuccess5(r.data))).catch(e=>dispatch(getSingleProductFilure5(e.data)))
 }
 
 const getSingleProductRequest6=(payload)=>{
    return{
     type:types.GET_SSINGLE_PRODUCT_REQUEST6,
     payload
    }
 }
 const getSingleProductSuccess6=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_SUCCESS6,
         payload
     }
 }
 const getSingleProductFilure6=(payload)=>{
     return{
         type:types.GET_SSINGLE_PRODUCT_FAILURE6,
         payload
     }
 }
 
 const getSingleProduct6 =(id)=>(dispatch)=>{
    dispatch(getSingleProductRequest6())
    Axios.get(`/products6/${id}`).then(r=>dispatch(getSingleProductSuccess6(r.data))).catch(e=>dispatch(getSingleProductFilure6(e.data)))
 }
 const addProductCardSuccess=(payload)=>{
     return{
         type:types.ADD_PRODUCT_CART_SUCCESS,
         payload
     }
 }
 const addProductCardFailure=(payload)=>{
     return{
         type:types.ADD_PRODUCT_CART_FAILURE,
         payload
     }
 }
 const addProductCard=(product)=>dispatch=>{
     dispatch(addProductCardRequest())
     Axios.post("/cart",product).then((r)=>dispatch(addProductCardSuccess(r.data))).catch((e)=>dispatch(addProductCardFailure(e.data)))
 }
 
 const fetchCartRequest=(payload)=>{
    return{
     type:types.FETCH_CART_REQUEST,
     payload
    }
 }
 const fetchCartSuccess=(payload)=>{
     return{
         type:types.FETCH_CART_SUCCESS,
         payload
     }
 }
 const fetchCartFailure=(payload)=>{
     return{
         type:types.FETCH_CART_FAILURE,
         payload
     }
 }
 const fetchCart=(payload)=>dispatch=>{
    dispatch(fetchCartRequest())
    Axios.get('/cart').then((r)=>dispatch(fetchCartSuccess(r.data))).catch((e)=>dispatch(fetchCartFailure(e.data)))

 }
 const deleteProductCartRequest =(payload)=>{
    return{
     type:types.REMOVE_PRODUCT_CART_REQUEST,
     payload
    }
 }
 const deleteProductCartSuccess=(payload)=>{
     return{
         type:types.REMOVE_PRODUCT_CART_SUCCESS,
         payload
     }
 }
 const deleteProductCartFailure=(payload)=>{
     return{
         type:types.REMOVE_PRODUCT_CART_FAILURE,
         payload
     }
 }
 const deletProductCart=(id)=>dispatch=>{
     dispatch(deleteProductCartRequest())
     Axios.delete(`/cart/${id}`).then((r)=>dispatch(deleteProductCartSuccess(r.data)))
     .then(()=>dispatch(fetchCart())).catch((e)=>dispatch(deleteProductCartFailure(e.data)))}

     const addOrderRequest=()=>{
        return{
            type:types.ADD_ORDER_REQUEST
        }
     }
     const addOrderSuccess=(payload)=>{
        return{
            type:types.ADD_ORDER_SUCCESS,
            payload
        }
     }
     const ADD_ORDER_FAILURE=(payload)=>{
        return{
            type:types.ADD_ORDER_FAILURE,
            payload
        }
     }
     const addOrder=(payload)=>(dispatch)=>{
        dispatch(addOrderRequest());
        const orderPayload=[];
        for(let product of payload){
            product && orderPayload.push(Axios.post('/orders',product))
            Promise.all(orderPayload)
            .then(()=>dispatch(addOrderSuccess()))
            .then(()=>dispatch(emptyCart(payload)))
            .catch((e)=>dispatch(addProductCardFailure()))
        }
     }
    const emptyCartRequest=()=>{
        return{
            type:types.EMPTY_CART_REQUEST
        }
    }
    const emptyCartSuccess=()=>{
        return{
            type:types.EMPTY_CART_SUCCESS
        }
    }
    const emptyCartFailure=()=>{
        return{
            type:types.EMPTY_CART_FAILUER
        }
    }
    const emptyCart=(payload)=>(dispatch)=>{
        dispatch(emptyCartRequest())
        const deletOrders=[];
        for(let obj of payload){
            let temp=dispatch(deletProductCart(obj.id))
            deletOrders.push(temp)
        }
        Promise.all(deletOrders).then(r=>dispatch(emptyCartSuccess())).catch(e=>dispatch(emptyCartFailure()))
    }
    const fetchOrderRequest=(payload)=>{
        return{
         type:types.FETCH_ORDERS_REQUEST,
         payload
        }
     }
     const fetchOrderSuccess=(payload)=>{
         return{
             type:types.FETCH_ORDERS_SUCCESS,
             payload
         }
     }
     const fetchOrderFailure=(payload)=>{
         return{
             type:types.FETCH_ORDERS_FAILURE,
             payload
         }
     }
     const fetchOrder=(payload)=>dispatch=>{
        dispatch(fetchOrderRequest())
        Axios.get('/cart').then((r)=>dispatch(fetchOrderSuccess(r.data))).catch((e)=>dispatch(fetchOrderFailure(e.data)))
    
     } 
export{fetchData,fetchData1,fetchData2,fetchData3,fetchData4,fetchData5,getSingleProduct,getSingleProduct1,getSingleProduct2,getSingleProduct3,getSingleProduct4,getSingleProduct5,addProductCard,fetchCart,deletProductCart,addOrder,emptyCart,fetchOrder}