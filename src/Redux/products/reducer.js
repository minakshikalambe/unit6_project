import*as types from'./actionTypes';

const initialState ={
    products:[],
    products1:[],
    products2:[],
    products3:[],
    products4:[],
    products5:[],
    products6:[],
    error:'',
    currentProduct:{},
    currentProduct1:{},
    currentProduct2:{},
    currentProduct3:{},
    currentProduct4:{},
    currentProduct5:{},
    currentProduct6:{},
    loading:false,
    cart:[],
    orders:[]
}

const productReducer=(state=initialState,action)=>{
    const{type,payload}=action;
    switch(type){
       case types.FETCH_DATA_REQUEST:
         return{
            ...state,
            error:'',
            loading:true,
         }
         case types.FETCH_DATA_SUCCESS:
         return{
            ...state,
            products:payload,
            error:'',
            loading:false
         }
         case types.FETCH_DATA_FAILURE:
         return{
            ...state,
            error:payload,
            loading:false
         }
         case types.FETCH_DATA_REQUEST1:
         return{
            ...state,
            error:'',
            loading:true,
         }
         case types.FETCH_DATA_SUCCESS1:
         return{
            ...state,
            products1:payload,
            error:'',
            loading:false
         }
         case types.FETCH_DATA_FAILURE1:
         return{
            ...state,
            error:payload,
            loading:false
         }
         case types.FETCH_DATA_REQUEST2:
            return{
               ...state,
               error:'',
               loading:true,
            }
            case types.FETCH_DATA_SUCCESS2:
            return{
               ...state,
               products2:payload,
               error:'',
               loading:false
            }
            case types.FETCH_DATA_FAILURE2:
            return{
               ...state,
               error:payload,
               loading:false
            }
            case types.FETCH_DATA_REQUEST3:
            return{
               ...state,
               error:'',
               loading:true,
            }
            case types.FETCH_DATA_SUCCESS3:
            return{
               ...state,
               products3:payload,
               error:'',
               loading:false
            }
            case types.FETCH_DATA_FAILURE3:
            return{
               ...state,
               error:payload,
               loading:false
            }
            case types.FETCH_DATA_REQUEST4:
               return{
                  ...state,
                  error:'',
                  loading:true,
               }
               case types.FETCH_DATA_SUCCESS4:
               return{
                  ...state,
                  products4:payload,
                  error:'',
                  loading:false
               }
               case types.FETCH_DATA_FAILURE4:
               return{
                  ...state,
                  error:payload,
                  loading:false
               }
               case types.FETCH_DATA_REQUEST5:
               return{
                  ...state,
                  error:'',
                  loading:true,
               }
               case types.FETCH_DATA_SUCCESS5:
               return{
                  ...state,
                  products5:payload,
                  error:'',
                  loading:false
               }
               case types.FETCH_DATA_FAILURE5:
               return{
                  ...state,
                  error:payload,
                  loading:false
               }  
               case types.FETCH_DATA_REQUEST6:
                  return{
                     ...state,
                     error:'',
                     loading:true,
                  }
                  case types.FETCH_DATA_SUCCESS6:
                  return{
                     ...state,
                     products6:payload,
                     error:'',
                     loading:false
                  }
                  case types.FETCH_DATA_FAILURE6:
                  return{
                     ...state,
                     error:payload,
                     loading:false
                  } 
         case types.GET_SSINGLE_PRODUCT_REQUEST:
            return{
               ...state,
               error:'',  
               loading:true,
            }
            case types.GET_SSINGLE_PRODUCT_SUCCESS:
            return{
               ...state,
               currentProduct:payload,
               error:'',
               loading:false
            }
            case types.GET_SSINGLE_PRODUCT_FAILURE:
            return{
               ...state,
               error:payload,
               loading:false
            }
            case types.GET_SSINGLE_PRODUCT_REQUEST1:
               return{
                  ...state,
                  error:'',  
                  loading:true,
               }
               case types.GET_SSINGLE_PRODUCT_SUCCESS1:
               return{
                  ...state,
                  currentProduct1:payload,
                  error:'',
                  loading:false
               }
               case types.GET_SSINGLE_PRODUCT_FAILURE1:
               return{
                  ...state,
                  error:payload,
                  loading:false
               }
               case types.GET_SSINGLE_PRODUCT_REQUEST2:
                  return{
                     ...state,
                     error:'',  
                     loading:true,
                  }
                  case types.GET_SSINGLE_PRODUCT_SUCCESS2:
                  return{
                     ...state,
                     currentProduct2:payload,
                     error:'',
                     loading:false
                  }
                  case types.GET_SSINGLE_PRODUCT_FAILURE2:
                  return{
                     ...state,
                     error:payload,
                     loading:false
                  }
                  case types.GET_SSINGLE_PRODUCT_REQUEST3:
                     return{
                        ...state,
                        error:'',  
                        loading:true,
                     }
                     case types.GET_SSINGLE_PRODUCT_SUCCESS3:
                     return{
                        ...state,
                        currentProduct3:payload,
                        error:'',
                        loading:false
                     }
                     case types.GET_SSINGLE_PRODUCT_FAILURE3:
                     return{
                        ...state,
                        error:payload,
                        loading:false
                     }
                     case types.GET_SSINGLE_PRODUCT_REQUEST4:
                        return{
                           ...state,
                           error:'',  
                           loading:true,
                        }
                        case types.GET_SSINGLE_PRODUCT_SUCCESS4:
                        return{
                           ...state,
                           currentProduct4:payload,
                           error:'',
                           loading:false
                        }
                        case types.GET_SSINGLE_PRODUCT_FAILURE4:
                        return{
                           ...state,
                           error:payload,
                           loading:false
                        } 
                        case types.GET_SSINGLE_PRODUCT_REQUEST5:
                           return{
                              ...state,
                              error:'',  
                              loading:true,
                           }
                           case types.GET_SSINGLE_PRODUCT_SUCCESS5:
                           return{
                              ...state,
                              currentProduct5:payload,
                              error:'',
                              loading:false
                           }
                           case types.GET_SSINGLE_PRODUCT_FAILURE5:
                           return{
                              ...state,
                              error:payload,
                              loading:false
                           } 
                           case types.GET_SSINGLE_PRODUCT_REQUEST6:
                              return{
                                 ...state,
                                 error:'',  
                                 loading:true,
                              }
                              case types.GET_SSINGLE_PRODUCT_SUCCESS6:
                              return{
                                 ...state,
                                 currentProduct6:payload,
                                 error:'',
                                 loading:false
                              }
                              case types.GET_SSINGLE_PRODUCT_FAILURE6:
                              return{
                                 ...state,
                                 error:payload,
                                 loading:false
                              }                
            case types.ADD_PRODUCT_CART_REQUEST:
                return{
                   ...state,
                   error:'',  
                   loading:true,
                }
                case types.ADD_PRODUCT_CART_SUCCESS:
                return{
                   ...state,
                   cart:[...state.cart,payload],
                   error:'',
                   loading:false
                }
                case types.ADD_PRODUCT_CART_FAILURE:
                return{
                   ...state,
                   error:payload,
                   loading:false
                }
                case types.FETCH_CART_REQUEST:
                    return{
                       ...state,
                       error:'',  
                       loading:true,
                    }
                    case types.FETCH_CART_SUCCESS:
                    return{
                       ...state,
                       cart:[...payload],
                       error:'',
                       loading:false
                    }
                    case types.FETCH_CART_FAILURE:
                    return{
                       ...state,
                       error:payload,
                       loading:false
                    }
                    case types.REMOVE_PRODUCT_CART_REQUEST:
                        return{
                           ...state,
                           error:'',  
                           loading:true,
                        }
                        case types.REMOVE_PRODUCT_CART_FAILURE:
                        return{
                            ...state,
                            error:payload,
                            loadimg:false
                        }
                        case types.FETCH_ORDERS_REQUEST:
                            return{
                               ...state,
                               error:'',  
                               loading:true,
                            }
                            case types.FETCH_ORDERS_SUCCESS:
                            return{
                               ...state,
                               orders:[...payload],
                               error:'',
                               loading:false
                            }
                            case types.FETCH_ORDERS_FAILURE:
                                return{
                                   ...state,
                                   error:payload,
                                   loading:false
                                }
        default: 
        return state;
    }
}
export default productReducer;