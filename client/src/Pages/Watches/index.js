



import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import ProductModal from '../../Components/ProductModal';
import { useState } from 'react';
import { Link } from "react-router-dom";
import MenBanner from '../../Components/MenBanner';
import WatchBanner from '../../Components/WatchBanner';


const Watches=(props)=>{

    const [isOpenProductModal, setisOpenProductModal] = useState(false);
    const viewProductDetails=(id)=>{
        setisOpenProductModal(true);

    }
    const closeProductModal=()=>{
        setisOpenProductModal(false);
    }
    return(
        <>
            
            <section className="menProducts">
                <div className="container">
                    <div className="row">
                        <div className="imgWrapper">
                            <img src="https://sslimages.shoppersstop.com/sys-master/root/hd6/hb3/32839232258078/MK-web_050624d.jpg" className="w-100"/>
                        </div>
                        
                        <div className=" productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0 hd1"> Do not miss the current offers until the end of July.</p>
                                </div>
                              
                            </div> 
                        </div>
                        <WatchBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Mens Watches</h3>  
                                                   
                                </div>                    
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h72/he3/32489500409886/WES829003_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Fossil</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 12999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 10999</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h3c/hca/29458355388446/WPLPEWJF0004603_NoColour.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Fossil</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 19999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 14399</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/he8/hc8/30752462143518/WFT38095PP12_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Fastrack Wearables</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 13999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 10299</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h2b/hed/30752437731358/WFT38095PP13_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Fastrack Wearables </h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 15299</span>
                                            <span className="netPrice text-danger ml-2">Rs. 12909</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                        </div>
                    

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Womens Watches</h3> 
                                                      
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hcc/hd6/28310774710302/WTT2608QM02_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Fossil</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 11999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 10499</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hff/h5d/30904907497502/WFIFFTW6077IN_NoColour.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Michael Kors</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 31999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 29099</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hb5/h62/30843879358494/WFIMK4725I_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Fossil</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 16999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 12499</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/ha1/hfa/29630003839006/WJC1L226M0045_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/watches"><h4>Just Cavalli</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 24500</span>
                                            <span className="netPrice text-danger ml-2">Rs. 22355</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                        </div>
                            
                        <WatchBanner/>
                        
                                                          
                    </div>


                </div>
            </section>
            {
                isOpenProductModal ===true && <ProductModal closeProductModal={closeProductModal}/>
            }
        </>
    )
}


export default Watches;