import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import QuantityBox from '../QuantityBox';
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineCompareArrows } from "react-icons/md";
import ProductZoom from '../ProductZoom';
import { IoMdCart } from "react-icons/io";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const ProductModal =(props)=>{
    return (
        <>
        
            <Dialog  open={true} className="productModal" onClose={()=>props.closeProductModal()} >
                <Button className='close_'  onClick={()=>props.closeProductModal()}><MdClose/></Button>
                <h4 class="mb-1 font-weight-bold"> All New Stylish dresses </h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span> Brands:</span>
                        <span className='ml-2'><b> Welch's </b> </span>
                    </div>
                    <Rating  name="read-only" value={5} readOnly size="small" precision={0.5}/>
                    <hr/>
                </div>   

                <div className='row mt-2 productDetailsModal'>
                    <div className='col-md-5'>

                        <ProductZoom/>
                       
                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'> Rs 680</span>
                            <span className='netPrice text-danger lg'> Rs. 499</span>
                        </div>
                        <span className='badge bg-success'> IN STOCK </span>
                        <p className='mt-3'>Package Contents	1 - Dress
                            Pack Of	1
                            Sleeve Style	Puff Sleeves
                            Fabric Composition	100% Viscose 30S Crinkle Crepe
                            Stretchable	No
                            Country of Origin	India
                            Fabric	Viscose
                            Occasion	Casual Wear
                            Knit/Woven	Woven
                            Sleeves	Half Sleeves
                            Neckline	Round Neck
                            Product Type	Dress
                            Fit	Regular Fit
                            Pattern	Solid</p>
                        
                        <div className='d-flex align-items-center'>
                            <QuantityBox/>
                            <Link to="/cart"><Button className='btn-blue btn-lg btn-big btn-round ml-3'>
                                 <IoMdCart/>Add to Cart</Button></Link>
                        </div>

                        <div className='d-flex align-items-center mt-5 actions'>
                        <Button  className='btn-round btn-sml' variant="outlined"> <IoHeartOutline/> &nbsp; ADD TO WISHLIST</Button>
                        <Button  className='btn-round btn-sml ml-3' variant="outlined"> <MdOutlineCompareArrows/> &nbsp;COMPARE</Button>
                        </div>
                        
                    </div>
                </div>            

            </Dialog>
        </>
        
    )
}
export default ProductModal;