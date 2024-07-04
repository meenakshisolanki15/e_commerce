import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ProMod2 from '../ProMod2';

const Pro2 = (props)=>{

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
                <img src="https://sslimages.shoppersstop.com/sys-master/images/hd5/h55/30077813227550/MAC-SL7C01ss_NC15.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                    <Button onClick={()=>viewProductDetails(2)}><TfiFullscreen/></Button>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/beauty"><h4>Make Up </h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 2090</span>
                    <span className="netPrice text-danger ml-2">Rs. 1202</span>
                </div>
            </div>   
        </div>

            {
                isOpenProductModal ===true && <ProMod2 closeProductModal={closeProductModal}/>
            }
        </>
    )

}
export default Pro2;