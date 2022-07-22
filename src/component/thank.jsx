import "./address.css"
import addlogo from"../images/Screenshot (9).png";
import { Link } from "react-router-dom"
const Tankyou=()=>{
    // const cart=useSelector((store)=>store.ecommerceData.cart)
    // console.log(cart[0].price,"cart")
    // let total=0;
    // let ototal=0
    // for(var i=0;i<cart.length;i++)
    // {
    //     total=total+(+cart[i].price)
    //     ototal=ototal+(+cart[i].price)
    // }
    // let b=ototal-total
    // console.log(b,"b",ototal)
    // let c=total-b+66
    return (
          <div className="address_container">
             <div className="add_logo"><img src={addlogo}/></div>
             <hr/>
             <Link to="/"><div className="thankyou">
                Thank you for shopping with us
             </div>
             </Link>    
          </div>
    )
}



export default Tankyou