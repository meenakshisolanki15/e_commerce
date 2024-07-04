import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../ProductModal';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Pro5 = (props)=>{

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
                <img src="https://sslimages.shoppersstop.com/sys-master/images/h2b/h47/32199606370334/S24KIT150051_WHITE.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                    <Link to="/homeStop"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/homestop"><h4>Kitchen and Dining</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 2000</span>
                    <span className="netPrice text-danger ml-2">Rs. 1289</span>
                </div>
            </div>   
        </div>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/he8/hc8/30752462143518/WFT38095PP12_NoColour.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/watches"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/watches"><h4>Fastrack Wearence</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 3400</span>
                    <span className="netPrice text-danger ml-2">Rs. 2289</span>
                </div>
            </div>   
        </div>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/hc0/hd1/32785049321502/S24INDIE1MUSTRD_YELLOW.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/women"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/women"><h4>Saree</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 2000</span>
                    <span className="netPrice text-danger ml-2">Rs. 1289</span>
                </div>
            </div>   
        </div>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/h5c/h2e/28615749632030/S19YSL2050358OR_NoColour.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/beauty"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/beauty"><h4>Perfume</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 690</span>
                    <span className="netPrice text-danger ml-2">Rs. 589</span>
                </div>
            </div>   
        </div>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/hc3/h94/28615575175198/S17YSL0787971OR_NoColour.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/beauty"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/beauty"><h4>perfume</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 600</span>
                    <span className="netPrice text-danger ml-2">Rs. 489</span>
                </div>
            </div>   
        </div>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/h15/hef/32524123832350/A23NARS51132068SS_BEHAVE.jpg_136Wx204H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/beauty"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/beauty"><h4>Mac</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 2000</span>
                    <span className="netPrice text-danger ml-2">Rs. 1289</span>
                </div>
            </div>   
        </div>

        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/h33/h99/31330653011998/FW23GM173SHRPSA_MAROON.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/women"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/women"><h4>Skirt</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 400</span>
                    <span className="netPrice text-danger ml-2">Rs. 289</span>
                </div>
            </div>   
        </div>
        <div className={`productItem ${props.itemView}`}>
            <div className="imgWrapper">
                <img src="https://sslimages.shoppersstop.com/sys-master/images/h1d/h41/30486900146206/S23CSGDR32549BE_BEIGE.jpg_230Wx334H" className="w-100"/>

                <span className="badge badge-primary"> 28% </span>
                <div className="actions">
                <Link to="/kids"><Button><TfiFullscreen/></Button></Link>
                    <Button><FaRegHeart style={{fontSize:'20px'}}/></Button>
                </div>
            </div>
            <div className="info">
            <Link to="/kids"><h4>Aj Dezines</h4></Link>
                <span className="text-success d-block"> In Stock</span>
                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                <div className="d-flex">
                    <span className="oldPrice">Rs. 600</span>
                    <span className="netPrice text-danger ml-2">Rs. 489</span>
                </div>
            </div>   
        </div>

            {
                isOpenProductModal ===true && <ProductModal closeProductModal={closeProductModal}/>
            }
        </>
    )

}
export default Pro5;