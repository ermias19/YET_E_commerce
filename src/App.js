import React from "react"
import logo from './logo.svg';
import './App.css';
import Login from './login/login';

import Mainconent from './main_page/maincontetnt'; 
import Footer from "./Footer";
import { BrowserRouter as Router,Route, Switch  } from "react-router-dom";



function App(){
  return(
    <div>
      <Router>
                <div>
                    <Route path="/home" component={Mainconent}/>
                    <Route path="/login" component={Login}/>
                    {/* <Route path="/vendor" coponent={vendor}/>
                    <Route path="/cart" coponent={cart}/>
                    <Route path="/orders" coponent={orders}/> */}
                 </div>
             </Router>

     
      
    </div>
 
  )
}
export default App
 