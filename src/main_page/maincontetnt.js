import React from "react"
import { Link } from 'react-router-dom';
import './style.css'
import mainlogo from './mainlogo.png';
import add_cart from './add_cart.png';
import phone from './phone_.png';
import comp from './comp_.png';
import home from './home.png';
import dole from './dole.png';




function Mainconent(){
    return( 
<div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
        <div className="header">
            <div class="brand">
               
            <a href=""><img src={mainlogo}></img></a>
            </div>
        

        <div class="search">
            
        <input type="text" placeholder="search"></input>
        <i class="fas fa-search"></i>
            
           
        </div>
            
        <div class="others">
        
            <Link to='/login'>
                <li><img src="https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-isolated-on.jpg"></img></li>
            </Link>
                
            <Link to='/login'>
                <li><img src="https://previews.123rf.com/images/martialred/martialred1706/martialred170600004/80446730-business-handshake-contract-agreement-thin-line-art-vector-icon-for-apps-and-websites.jpg"></img></li>
            </Link>
            <Link to='/login'>
                <li><img src="https://previews.123rf.com/images/martialred/martialred1507/martialred150700105/42420285-american-dollar-currency-symbol-flat-icon-for-apps-and-websites.jpg"></img></li>
            </Link>
            <Link to='/login'>
                <li><img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg"></img></li>
            </Link>
               
            
            </div>
           
           
        
        </div>
        <div className="main_container">
            <div className="categories">
                <h3>categories</h3>
                <ul>
                    <li>electronics</li>
                    <ul>
                        <li>cellphone</li>
                        <li>laptops</li>
                        <li>desktop</li>
                        <li>tv's</li>
                    </ul>
                </ul>
                <ul>
                    <li>cloth</li>
                    <ul>
                        <li>t-shirt</li>
                        <li>paint</li>
                        <li>sockes</li>
                        <li>jackets</li>
                    </ul>
                </ul>

            </div>
            <div className="shop_posters">
                

            </div>
            <div className="help_center">
                <h3>help center</h3>    
                <h3>what is yet.com</h3>
                <h3>*how to transcation*</h3>
                <h3>the first online transcation</h3>
            </div>


        </div>
        <hr></hr>
        <h3>recommends for you</h3>
        <div className="product_flex">
        
            <div className="recommend">
                <div className="cell">
                    <a className="obj" href=""> < img src="https://www.phoneplacekenya.com/wp-content/uploads/2019/09/Tecno-Spark-4-c_result.jpg" width="250" height="250"></img>
                    <a><img  src={add_cart}></img></a>
                    <p>TECNO Spark - 8MP front & 13MP rear camera hbb</p></a>
                    
                </div>
                <div className="cell">
                    <a href=""> < img src="https://images-na.ssl-images-amazon.com/images/I/71EPckcD8ZL._AC_SL1244_.jpg" width="250"height="250"></img>
                    <a><img  src={add_cart}></img></a>
                    <p>Raspberry Pi 3 Model B is the latest version</p></a>
                </div>
                <div className="cell">
                    <a href=""> < img src="https://images-na.ssl-images-amazon.com/images/I/61d%2BfwZt5VL._AC_UX425_.jpg" width="250"height="250"></img>
                    <a><img  src={add_cart}></img></a>
                    <p>rasperyypi</p></a>
                </div>
                <div className="cell">
                    <a href=""> < img src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-shoe-6jXPDp.jpg" width="250" height="250"></img>
                    <a><img  src={add_cart}></img></a>
                    <p>nike shoes</p></a>
                </div>
            </div>
        </div>
        <h3>top sells</h3>
        <div className="product_flex_2">
            
            <div className="recommend">

                <div className="cell" >
                
                    <a href="">
                    
                        < img src="https://in.apparelresources.com/wp-content/uploads/sites/3/2020/04/Myntra-with-wildcraft.jpg" width="250" height="250"></img>
                        <a><img  src={add_cart}></img></a>
                            <p>techno Spark</p>
                        </a>
                        
                   

                    
                </div>
                <div className="cell">
                
                <a href=""> < img src="https://helloomarket.com/image/cache/catalog/0955-10001-814x1000.jpg" width="250"height="250"></img>
                <a><img  src={add_cart}></img></a>
                <p>nike hoodie</p></a>

                </div>
                <div className="cell">
                    <a href=""> < img src="https://helloomarket.com/image/cache/catalog/101713-814x1000.jpg" width="250"height="250"></img>
                    <a><img  src={add_cart}></img></a>
                    <p>rasperyypi</p></a>
                </div>
                <div className="cell">
                    <a href=""> < img src="https://helloomarket.com/image/cache/catalog/0183-10009-0-285x300.jpg" width="250" height="250"></img>
                    <a><img  src={add_cart}></img></a>
                    <p>nike shoes</p></a>
                </div>
                
            </div>
           
            </div>
            
                <div >
                    <h3> collection</h3>
                    <a href=""><img src={phone}></img></a>
                    <a href=""><img src={comp}></img></a>
                    <a href=""><img src={dole}></img></a>
                    <a href=""><img src={home}></img></a>
                
            </div>
            
            
            
</div>
       
        
        
    )
}
export default Mainconent