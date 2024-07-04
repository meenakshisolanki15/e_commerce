import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';

const Cart2=()=>{
    return(
        <>
            <section className="section cartPage">
                <div className="container">
                <h2 className="hd mb-1">Your Cart </h2>
                <p>There are <b className="text-red"> 1 </b> products in your cart</p>

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
                                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h9e/hbd/26668491538462/A21ZIKUCR3150_BLACK.jpg_230Wx334H"
                                                        className="w-100"/>
                                                    </div>
                                                    <div className="info px-3">
                                                        <h6>Ziyaa</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} 
                                                        size="small"/>

                                                    </div>
                                                </div>
                                                </Link>
                                                
                                            </td>
                                            <td width="15%">Rs. 394</td>
                                            <td width="25%" ><QuantityBox/></td>
                                            <td width="15%">Rs. 394</td>    
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
                                                        <h6>Stop</h6>
                                                        <Rating name="read-only" value={4.5} readOnly precision={0.5} 
                                                        size="small"/>

                                                    </div>
                                                </div>
                                                </Link>
                                                
                                            </td>
                                            <td width="15%">Rs. 599</td>
                                            <td width="25%" ><QuantityBox/></td>
                                            <td width="15%">Rs. 599</td>    
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
                                    <span className="ml-auto text-red ">Rs. 993 </span>
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
                                    <span className="ml-auto text-red font-weight-bold">Rs. 993</span>
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
export default Cart2;