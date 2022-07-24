import  "./footer.css";
import heading_log from "../images/Screenshot (13).png"
import twit from "../images/Screenshot (14).png"
const Footer =()=>{
       
    return (
     <div className="container_foot">
        <div className="shop_div">
            <div className="shop_div1">
            <h1 className="heading">Shop Non-Stop on Meesho</h1>
            </div>
            <p className="heading_1">Trusted by more than 1 Crore Indians
                    Cash on Delivery | Free Delivery</p>
            <div className="heading_logo">
                <img src={heading_log}/>
                </div>        
        </div>
        <div className="careers">
            <div className="careers1">
                <p className="car_p1">Careers</p>
                <p className="car_p2">Become a supplier</p>
                <p className="car_p2">Our Influencer Program</p>
                <p className="car_p2">Hall of Fame</p>
            </div>
            <div className="careers1">
                <p className="car_p1">Legal and Policies</p>
                <p className="car_p2">BMeesho Tech Blog</p>
                <p className="car_p2">Notices and Returns</p>
            </div>
        </div>
        <div className="container_reach">
            <img src={twit}/>
        </div>
        <div className="container_reach1">
            <p className="contact">Contact Us</p>
            <p className="contact1">Fashnear Technologies Private Limited,
CIN: U74900KA2015PTC082263
06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India
E-mail address: query@meesho.com
© 2015-2022 Meesho.com</p>
        </div>
     </div>
    )
}



export default Footer