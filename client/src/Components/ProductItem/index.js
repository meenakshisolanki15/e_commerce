import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../ProductModal';
import { useState } from 'react';
import { Link } from "react-router-dom";

const ProductItem = (props)=>{

    const [isOpenProductModal, setisOpenProductModal] = useState(false);
    const viewProductDetails=(id)=>{
        setisOpenProductModal(true);

    }
    const closeProductModal=()=>{
        setisOpenProductModal(false);
    }
    return(
        <>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/h89/h6c/32526067302430/S24346DR21_BLUE_alt2.jpg_2000Wx3000H" className="w-100"/>

                <span className="badge badge-primary"> 25% </span>
                <div className="actions">
                    <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="product/:id"><h4>Fratini</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 680</span>
                    <span className="netPrice text-danger ml-2">Rs. 499</span>
                </div>
            </div>   
        </div>

            {
                isOpenProductModal ===true && <ProductModal closeProductModal={closeProductModal}/>
            }
        </>
    )

}
export default ProductItem;