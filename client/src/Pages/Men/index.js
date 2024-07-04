import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import MenModal from '../../Components/MenModal';
import { useState } from 'react';
import { Link } from "react-router-dom";
import MenBanner from '../../Components/MenBanner';


const Men=(props)=>{

    const [isOpenmenModal, setisOpenmenModal] = useState(false);
    const viewProductDetails=(id)=>{
        setisOpenmenModal(true);

    }
    const closemenModal=()=>{
        setisOpenmenModal(false);
    }
    return(
        <>
            
            <section className="menProducts">
                <div className="container">
                    <div className="row">
                        <div className="imgWrapper">
                            <img src="https://sslimages.shoppersstop.com/sys-master/root/h2a/h8e/32968383168542/eoss-sale-strip-web_37-sj.jpg" className="w-100"/>
                        </div>
                        
                        <div className=" productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0 hd1"> Do not miss the current offers until the end of July.</p>
                                </div>
                              
                            </div>


                            <div className="men_row w-100 mt-4">
                                <img  className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h36/hfc/32833696333854/Men%204%20widget-Web-Trouser---2024-06---04--new.jpg" />
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/hf6/hff/32833696202782/Men%204%20widget-Web-Jeans----2024--06--04-.jpg"/>
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/hef/ha0/32833695547422/Men%204%20widget-Web-Shirts---2024--06--04-.jpg"/>
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h7f/hab/32833695875102/Men%204%20widget-Web-T-shirts--2024--06--04-.jpg"/>
                                
                            </div>
                        </div>
                        <MenBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Shirts For Men</h3>  
                                    <Button className="btn" onClick={()=>viewProductDetails(1)}>View Details</Button>                 
                                </div>                    
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hb9/hb7/29503753224222/S23FLINSTP194NV_NAVY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fratini</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h3c/h09/32170024108062/S24GAPRINTPEACH_PINK.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Allen Solly</h4></Link>
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
                                        <Link to="product/:id"><h4>Celio</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hbe/h3f/32018419875870/S24LDDOBSH230BK_BLACK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Life </h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h8b/hed/30726152126494/A23FOXCHK93BR_BROWN.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fratini</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/ha1/h6e/29513934372894/S23STCTNCHK40WH_WHITE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Stop</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/he7/h33/29503796477982/S23LCLNSOL152AQ_AQUA.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 22% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Life</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hcf/h00/28966891651102/A22MSH1185_BLUE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Tistabene</h4></Link>
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
                                    <h3 className="mb-0 hd">  T-shirts For Men</h3> 
                                                       
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h89/he0/28884619165726/S23STCAOP29PPF_PINK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Stop</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hb4/h0e/32585674620958/BUL22BHPE_BLUE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Bullmer</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hba/h2c/29227039359006/S23STCPO35PBF_POWDER_BLUE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Stop</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h67/h1d/29385049538590/S23LFCASGRT22SB_STONE_BLUE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Life</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h36/h76/27005382262814/S22STSOLIDTEE_ORANGE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>stop</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hf6/h2b/31984380379166/S24UDTSH2007BLA_BLACK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 33% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>U.S. Polo Assn. Denim</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h5f/h0a/27178140565534/S22STSOLIDTEE_YELLOW.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Stop</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h8b/hca/27529244704798/S22STSOLIDPOLO_OFF_WHITE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Stop</h4></Link>
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
                        
                        <MenBanner/>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Trouser For Men</h3>  
                                                      
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hbf/h67/32571520745502/S24BBDLPM2627G1_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Blackberrys</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1995</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1396</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h4c/h2a/31984589013022/S24FMTRO0402GRE_GREY.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Flying Machine</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1799</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1259</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/ha4/h46/32525591412766/S24MTRCG1BD033G_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 32% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Spyker</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 4299</span>
                                            <span className="netPrice text-danger ml-2">Rs. 2579</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h07/h49/30980196859934/A23LCORDTR56BG_BEIGE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Life</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1899</span>
                                            <span className="netPrice text-danger ml-2">Rs. 899</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                            <div className="menProducts2">  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h8d/h9d/31258997850142/A23M-TRCRON135_OLIVE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Intune</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1256</span>
                                            <span className="netPrice text-danger ml-2">Rs. 999</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h9c/he1/30684879781918/CGO0167_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Tistabene</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 5599</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1175</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h89/hf9/31910706053150/S24DOLINCO1GREY_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Celio</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 2999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1788</span>
                                        </div>
                                    </div>   
                                </div> 
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h5a/h45/31202430386206/A23STPVRWT34BK_BLACK.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Stop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 499</span>
                                        </div>
                                    </div>   
                                </div>      
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">  Jeans For Men</h3>
                                                     
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h39/hc2/30910734336030/AW23LFDCFWT39_WHITE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Mid Wash Cotton Lycra Tapered Fit</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h0d/h83/30980206231582/AW23LFDSFLB19_LIGHT_BROWN.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Mid Wash Cotton Lycra Slim Fit</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h93/hce/30910412128286/AW23LFDCFIN03_INDIGO.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 25% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Mid Wash Cotton Lycra Tapered Fit</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h6b/h19/29198983987230/AW22GLAMOUR_DARK_INDIGO.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Mid Wash Cotton Blend Slim Fit</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 2199</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1099</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                        </div>
                    </div>
                    

                </div>
            </section>
            {
                isOpenmenModal ===true && <MenModal closemenModal={closemenModal}/>
            }
        </>
    )
}
export default Men;