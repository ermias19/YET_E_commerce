import React from "react"
import './style.css'

function Mainconent(){
    return( <div>
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
                <div>
                    <a href=""> < img src="https://www.phoneplacekenya.com/wp-content/uploads/2019/09/Tecno-Spark-4-c_result.jpg" width="250" height="250"></img><p>techno Spark</p></a>
                </div>
                <div>
                    <a href=""> < img src="https://images-na.ssl-images-amazon.com/images/I/71EPckcD8ZL._AC_SL1244_.jpg" width="250"height="250"></img><p>nike hoodie</p></a>
                </div>
                <div>
                    <a href=""> < img src="https://images-na.ssl-images-amazon.com/images/I/61d%2BfwZt5VL._AC_UX425_.jpg" width="250"height="250"></img><p>rasperyypi</p></a>
                </div>
                <div>
                    <a href=""> < img src="https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-shoe-6jXPDp.jpg" width="250" height="250"></img><p>nike shoes</p></a>
                </div>
            </div>
        </div>
        <h3>top sells</h3>
        <div className="product_flex_2">
            
            <div className="top_sells">

                <div >
                    <a href=""> < img src="https://in.apparelresources.com/wp-content/uploads/sites/3/2020/04/Myntra-with-wildcraft.jpg" width="250" height="250"></img><p>techno Spark</p></a>
                </div>
                <div>
                
                <a href=""> < img src="https://helloomarket.com/image/cache/catalog/0955-10001-814x1000.jpg" width="250"height="250"></img><p>nike hoodie</p></a>

                </div>
                <div>
                    <a href=""> < img src="https://helloomarket.com/image/cache/catalog/101713-814x1000.jpg" width="250"height="250"></img><p>rasperyypi</p></a>
                </div>
                <div>
                    <a href=""> < img src="https://helloomarket.com/image/cache/catalog/0183-10009-0-285x300.jpg" width="250" height="250"></img><p>nike shoes</p></a>
                </div>
            </div>
            </div>
            </div>
       
        
        
    )
}
export default Mainconent