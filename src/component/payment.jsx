import "./address.css"
import addlogo from"../images/Screenshot (9).png";
import cash from"../images/Screenshot (16).png";
import { Link } from "react-router-dom"
import {  useSelector } from "react-redux";
const Payment =()=>{
    const cart=useSelector((store)=>store.ecommerceData.cart)
    console.log(cart[0].price,"cart")
    let total=0;
    let ototal=0
    for(var i=0;i<cart.length;i++)
    {
        total=total+(+cart[i].price)
        ototal=ototal+(+cart[i].price)
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
                <p className="address_container_p1">Payment Method</p>
                <div className="box_add">
                   <div className="cash-img"><img src={cash}/></div>
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
                <Link to="/tankyou"><button className="submit_add"> Continue</button></Link>
             </div>
             </div>
          </div>
    )
}



export default Payment