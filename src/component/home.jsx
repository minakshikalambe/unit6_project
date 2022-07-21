import './home.css';
import lowestPriceImg from"../images/Screenshot (2).png";
import fashionStoreImg1 from"../images/Screenshot (4).png";
import essentialImg1 from"../images/Screenshot (6).png";
import essentialImg2 from"../images/Screenshot (8).png";
import { HomeProducts } from './Products';
import { Navbar } from './Navbar';
import Footer from './footer';
export const Homepage=()=>{
    return(
        <>
        <Navbar/>
             <div className='homeContainer'>
                <div className='lowestPrice'>
                    <img className='lowestPriceImg' alt="p1" src={lowestPriceImg}/>
                </div>
                <div className='classCategory'><h1>Top Categories to choose from</h1></div>
                <div className='fashionStore'>
                    <img className='fashionStoreImg' alt="p2" src={fashionStoreImg1}/>
                </div>
                <div className='classCategory'></div>
                <div className='essential'>
                    <img className='essentialImg' alt="p3" src={essentialImg1}/>
                </div>
                <div className='classCategory'></div>
                <div className='essential'>
                    <img className='essentialImg' alt="p4" src={essentialImg2}/>
                </div>
                <div className='homeProduct'></div>
                <HomeProducts/>
             </div>
             <Footer/>
        </>
    )
}