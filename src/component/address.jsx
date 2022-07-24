import "./address.css"
import addlogo from"../images/Screenshot (9).png";
import call from"../images/icons8-call-24.png";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { addOrder, deletProductCart } from "../Redux/products/action";
const Address =()=>{
    const cart=useSelector((store)=>store.ecommerceData.cart)
    console.log(cart[0].price,"cart")
    let total=0;
    let ototal=0
    for(var i=0;i<cart.length;i++)
    {
        total=total+(+cart[i].price)
        ototal=ototal+(+cart[i].oprice)
    }
    let b=ototal-total
    console.log(b,"b",ototal)
    let c=total-b+66
    return (
          <div className="address_container">
             <div className="add_logo"><img src={addlogo}/></div>
             <hr/>
             <div className="address_container_sub">
             <div className="address_container_sub1">
                <p className="address_container_p1">Select Delivery Address</p>
                <div className="box_add">
                    <span><img src={call} className="call_img"/></span>
                    <span><p className="contact_detail">Contact Details</p></span>
                    <input placeholder="Name" className="name_inp"/>
                   
                    <input placeholder="Phone Number" className="name_inp"/>
                   
                    <input placeholder="Phone Number" className="name_inp"/>
                   
                    <input placeholder="Enter Address" className="name_inp"/>
                    
                    <input placeholder="Pincode" className="name_inp"/>
                    
                    <input placeholder="City" className="name_inp"/>
                    
                    <input placeholder="State" className="name_inp"/>
                    
                    <Link to="/payment"><button className="submit_add"> Save Address and Continue</button></Link>
                </div>
             </div>
             <div className="address_container_sub2">
                <p className="price_p">Price Details</p>
                <div className="total_product">
                    <p>Total Product Price</p>
                    <p>₹{total}</p>
                </div>
                <div className="total_product1">
                    <p>Meesho Discount</p>
                    <p>-₹{total-ototal}</p>
                </div>
                <div className="total_product">
                    <p>Additional fees</p>
                    <p>+₹66</p>
                </div>
                <hr/>
                <div className="total_product2">
                    <p>Additional fees</p>
                    <p>₹{c}</p>
                </div>
             </div>
             </div>
          </div>
    )
}



export default Address