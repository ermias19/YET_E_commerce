import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

function Login(){
    return(<div>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
        <div className="header">
        
            <div class="brand">
               
            <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5X1EVFvXuumsgJMTM0uH0Ct9riulQYE_yew&usqp=CAU"></img></a>
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
    <form>
        <div className="sign_in" ><h2>sign in</h2></div>
        <div className="name">
       
        <input type="text"placeholder="user_name/email"></input>
        </div>
        <div className="password">
        
        <input type="password" placeholder="password"></input>
        </div>
        <div className="submit">
        <a href=""><p>Forget your Password</p></a>
        <button>submit</button>
        </div>
        <p>new for Grand? <a href="">sign in</a></p>
       
    </form>
    </div>
)
    }
export default Login