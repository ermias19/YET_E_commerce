import React from "react"
import './style.css';

function Nav(){
    return(
        <nav className="header">
            <ul>
            <li><p id="main_name">YET.com</p></li>
           <li><input placeholder="search"></input></li>
            <li><button>search</button></li>
            </ul>
            <hr></hr>
            
           
            
            
        </nav>
    )
}
export default Nav