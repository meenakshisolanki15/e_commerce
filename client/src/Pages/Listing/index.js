import Sidebar from "../../Components/Sidebar";
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { useState } from "react";
import ProductItem from "../../Components/ProductItem";
import Pro2 from "../../Components/Pro2";
import Pro3 from "../../Components/Pro3";
import Pro4 from "../../Components/Pro4";
import Pro5 from "../../Components/Pro5";

const Listing =()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
         <section className="product_Listing_Page">
            <div className="container">
                <div className="productListing d-flex">
                    <Sidebar/>
                    <div className="content-right">
                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h00/h3f/32968382906398/Main-web_10-aki.jpg" className="w-100" style={{borderRadius:'8px'}}/>


                        <div className="showBy mt-3 mb-3 d-flex align-items-center">
                            <div className="d-flex align-items-center btnWrapper">
                                <Button className={productView==='one' && 'act'} onClick=
                                    {()=>setProductView('one')}><IoIosMenu/>
                                </Button>
                                <Button className={productView==='three' && 'act'} onClick=
                                    {()=>setProductView('three')}><CgMenuGridO/>
                                </Button>
                                <Button className={productView==='four' && 'act'} onClick=
                                    {()=>setProductView('four')}><TfiLayoutGrid4Alt/>
                                </Button>
                            </div>
                        </div>

                        <div className="productListing">
                            <ProductItem itemView={productView}/>
                            <Pro2 itemView={productView}/>
                            <Pro3 itemView={productView}/>
                            <Pro4 itemView={productView}/>
                            <Pro5 itemView={productView}/>   
                        </div>


                        
                    </div>
                </div>
            </div>
        </section>
         
        </>
    )

}

export default Listing;