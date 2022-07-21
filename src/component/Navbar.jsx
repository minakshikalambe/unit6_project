import { Link } from "react-router-dom";
import './Navbar.css';
import logo from"../images/Screenshot (9).png"
import download from"../images/Screenshot (10).png"
import profile from"../images/icons8-male-user-32.png"
import cart from"../images/icons8-shopping-cart-50.png";
import order from"../images/shopping-bag.png"
export const Navbar=()=>{
    
    return(
      <div className="navbarContainer">
        <div className="navabar_sub1">
        <Link  to="/"> <div className="logo"><img src={logo}/></div></Link>
        <div className="input_div"><input className="inputTag" /></div>
        <div className="empty"></div>
        <div className="download"><img src={download}/></div>
        <Link  to="/login">
        <div className="profile">
        <img src={profile}/>
        </div>
        </Link>
        <Link  to="/cart">
        <div className="profile">
        <img src={cart}/>
        </div>
        </Link>
        <Link  to="/order">
        <div className="profile">
        <img src={order}/>
        </div>
        </Link>
        </div>
        <hr/>
        <div className="navbar_sub2">
            <div className="ethanic">
            <Link  to="/product1">
                <p className="ethanic_p">Women Ethnic</p>
            </Link>
            </div>
            <div className="ethanic">
            <Link  to="/product2">
                <p className="ethanic_p">Women Western</p>
            </Link>
            </div>
            <div className="ethanic">
            <Link  to="/product3">
                <p className="ethanic_p">Jewellery & Accessories</p>
            </Link>
            </div>
            <div className="ethanic">
            <Link  to="/product4">
                <p className="ethanic_p">Men</p>
            </Link>
            </div>
            <div className="ethanic">
            <Link  to="/product5">
                <p className="ethanic_p">Beauty & Health</p>
            </Link>
            </div>
            <div className="ethanic">
            <Link  to="/">
                <p className="ethanic_p">Home & Kitchen</p>
            </Link>
            </div>
            <div className="ethanic">
            <Link  to="/">
                <p className="ethanic_p">Electronics</p>
            </Link>
            </div>
        </div>
      </div>
    )
}
