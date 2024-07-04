import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';

const Cart=()=>{
    return(
        <>
            <section className="section cartPage">
                <div className="container">
                <h2 className="hd mb-1">Your Cart </h2>
                <p>There are <b className="text-red"> 4 </b> products in your cart</p>

                    <div className="row">
                        <div className="col-md-9 pr-5">
                           
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="40%">Product</th>
                                            <th width="25%">Unit Price </th>
                                            <th width="15%">Quantity</th>
                                            <th width="15%">Subtotal</th>
                                        </tr>
                                    </thead>
                                
                                    <tbody>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                <div className="d-flex align-items-center 
                                                cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h89/h6c/32526067302430/S24346DR21_BLUE_alt2.jpg_2000Wx3000H"
                                                        className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Fratini</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} 
                                                        size="small"/>

                                                    </div>
                                                </div>
                                                </Link>
                                                
                                            </td>
                                            <td width="15%">Rs. 499</td>
                                            <td width="25%" ><QuantityBox/></td>
                                            <td width="15%">Rs. 499</td>    
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                <div className="d-flex align-items-center 
                                                cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hd5/h55/30077813227550/MAC-SL7C01ss_NC15.jpg_230Wx334H"
                                                        className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Mac</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} 
                                                        size="small"/>

                                                    </div>
                                                </div>
                                                </Link>
                                                
                                            </td>
                                            <td width="15%">Rs. 1020</td>
                                            <td width="25%"><QuantityBox/></td>
                                            <td width="15%">Rs. 1020</td>
                                            
                                        </tr>
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                <div className="d-flex align-items-center 
                                                cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hb9/hb7/29503753224222/S23FLINSTP194NV_NAVY.jpg_230Wx334H"
                                                        className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Fratini</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} 
                                                        size="small"/>

                                                    </div>
                                                </div>
                                                </Link>
                                                
                                            </td>
                                            <td width="15%">Rs. 999</td>
                                            <td width="25%"><QuantityBox/></td>
                                            <td width="15%">Rs. 999</td>
                        
                                        </tr>  
                                        <tr>
                                            <td width="40%">
                                                <Link to="/product/1">
                                                <div className="d-flex align-items-center 
                                                cartItemimgWrapper">
                                                    <div className="imgWrapper">
                                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h51/hde/32785016225822/S24INDIE1RED_RED.jpg_230Wx334H"
                                                        className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Estela</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} 
                                                        size="small"/>

                                                    </div>
                                                </div>
                                                </Link>
                                                
                                            </td>
                                            <td width="15%">Rs. 17000</td>
                                            <td width="25%"><QuantityBox/></td>
                                            <td width="15%">Rs. 17000</td>
                        
                                        </tr>                           
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card border p-3 cartDetails">
                                <h4>CART TOTALS </h4>

                                <div className="d-flex align-items-center mb-3">
                                    <span>Subtotal</span>
                                    <span className="ml-auto text-red ">Rs. 19518</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Shipping</span>
                                    <span className="ml-auto">Free</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Estimate for</span>
                                    <span className="ml-auto">United Kingdom</span>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <span>Total</span>
                                    <span className="ml-auto text-red font-weight-bold">Rs. 19518</span>
                                </div>

                                <br/>
                                <Button className='btn-blue btn-lg btn-big  ml-3'> 
                                     Total bill </Button>

                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )

}
export default Cart;