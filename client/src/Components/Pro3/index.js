import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import ProMod3 from '../ProMod3';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Pro3 = (props)=>{

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
                <img src="https://sslimages.shoppersstop.com/sys-master/images/hb9/hb7/29503753224222/S23FLINSTP194NV_NAVY.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                    <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/men"><h4>Men's Wear </h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 1250</span>
                    <span className="netPrice text-danger ml-2">Rs. 999</span>
                </div>
            </div>   
        </div>

            {
                isOpenProductModal ===true && <ProMod3 closeProductModal={closeProductModal}/>
            }
        </>
    )

}
export default Pro3;