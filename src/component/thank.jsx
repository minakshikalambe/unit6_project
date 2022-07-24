import "./address.css"
import addlogo from"../images/Screenshot (9).png";
import { Link } from "react-router-dom"
const Tankyou=()=>{
  
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