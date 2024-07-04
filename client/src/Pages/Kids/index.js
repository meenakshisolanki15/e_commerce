

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import KidModal from '../../Components/KidModal';
import { useState } from 'react';
import { Link } from "react-router-dom";
import KidBanner from '../../Components/KidBanner';


const Kids=(props)=>{

    const [isOpenKidModal, setisOpenKidModal] = useState(false);
    const viewProductDetails=(id)=>{
        setisOpenKidModal(true);

    }
    const closeKidModal=()=>{
        setisOpenKidModal(false);
    }
    return(
        <>
            
            <section className="menProducts">
                <div className="container">
                    <div className="row">
                        <div className="imgWrapper">
                            <img src="https://sslimages.shoppersstop.com/sys-master/root/hcd/hf3/32968384741406/70-1wed.jpg" className="w-100"/>
                        </div>
                        
                        <div className=" productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0 hd1"> Do not miss the current offers until the end of July.</p>
                                </div>
                              
                            </div>


                            <div className="men_row w-100 mt-4">
                                <img  className="img" src="https://sslimages.shoppersstop.com/sys-master/root/ha3/hfa/32839215710238/Kurtas-web_kd--e3.jpg" />
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h48/h98/32839219478558/Combo-Sets-web_f-l-4.jpg"/>
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h64/h41/32848960159774/Aj-Dezines-web--2024-06-06.jpg"/>
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h04/h01/32841556623390/Lil-Drama-web--2024-06-05.jpg"/>
                                
                            </div>
                        </div>
                        <KidBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Lil Drama</h3>  
                                    <Button className="btn" onClick={()=>viewProductDetails(1)}>View Details</Button>                 
                                </div>                    
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h77/heb/30413728776222/CETP3162G_GREEN.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/kids"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 999</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h0b/h03/30056652570654/CEBKPJ4026_BLUE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/kids"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1399</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h9a/h8d/31814837010462/A23M-CLSHIK060_MUSTARD.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/kids"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 3999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 2299</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h48/hd5/30058117562398/CEBKD4014_ORANGE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aarika </h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1299</span>
                                            <span className="netPrice text-danger ml-2">Rs. 909</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                            <div className="menProducts2">  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hf3/h6e/30413478002718/CETP3173L_PURPLE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/kids"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1499</span>
                                            <span className="netPrice text-danger ml-2">Rs. 749</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h48/h39/31635932184606/L3AWTS6094_PURPLE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/kids"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1499</span>
                                            <span className="netPrice text-danger ml-2">Rs. 749</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h1f/h78/30057190129694/CPTP6042_WHITE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 22% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1669</span>
                                            <span className="netPrice text-danger ml-2">Rs. 849</span>
                                        </div>
                                    </div>   
                                </div> 
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h43/hbf/30617672744990/CEBKD4040_BLUE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aarika</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1799</span>
                                            <span className="netPrice text-danger ml-2">Rs. 395</span>
                                        </div>
                                    </div>   
                                </div>      
                            </div>

                        </div> 

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">  All Kids Category</h3> 
                                    <Button className="btn" onClick={()=>viewProductDetails(1)}>View Details</Button>                   
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hf7/h5f/30160198008862/S23CSGDR32614WH_WHITE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1199</span>
                                            <span className="netPrice text-danger ml-2">Rs. 599</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h7d/h6a/29310040080414/A22CSBSS20228RU_RUST.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 499</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hd6/hbc/28173125058590/A22CSGDE34588PI_PINK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 499</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hde/h80/31861842837534/A23CSGLF37570BL_BLACK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 499</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                            <div className="menProducts2">  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hfd/h16/29308890546206/A21CSBJK19113BL_BLACK.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 399</span>
                                            <span className="netPrice text-danger ml-2">Rs. 119</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hd5/hf0/30292746043422/S23CSBMA11554IN_INDIGO.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 33% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1899</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1329
                                            </span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h32/h0f/28851628146718/A22CSGR325872NA_NAVY_BLUE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 399</span>
                                            <span className="netPrice text-danger ml-2">Rs. 119</span>
                                        </div>
                                    </div>   
                                </div> 
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h1d/h41/30486900146206/S23CSGDR32549BE_BEIGE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Aj Dezines</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 299</span>
                                        </div>
                                    </div>   
                                </div>      
                            </div>
                        </div>
                        
                        <KidBanner/> 
                    </div>


                </div>
            </section>
            {
                isOpenKidModal ===true && <KidModal closeKidModal={closeKidModal}/>
            }
        </>
    )
}
export default Kids;