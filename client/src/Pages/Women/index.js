import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from "react-router-dom";
import WomenBanner from '../../Components/WomenBanner';
import WomenModal from '../../Components/WomenModel';


const Women=(props)=>{

    const [isOpenWomenModal, setisOpenWomenModal] = useState(false);
    const viewProductDetails=(id)=>{
        setisOpenWomenModal(true);

    }
    const closeWomenModal=()=>{
        setisOpenWomenModal(false);
    }
    return(
        <>
            
            <section className="menProducts">
                <div className="container">
                    <div className="row">
                        <div className="imgWrapper">
                            <img src="https://sslimages.shoppersstop.com/sys-master/root/hcb/h04/32968400404510/70-1wcb-d.jpg" className="w-100"/>
                        </div>
                        
                        <div className=" productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0 hd1"> Do not miss the current offers until the end of July.</p>
                                </div>
                              
                            </div>


                            <div className="men_row w-100 mt-4">
                                <img  className="img" src="https://sslimages.shoppersstop.com/sys-master/root/ha5/h4f/32991718015006/Top%20Brands%20Web-Van%20Heusen_476-cj.jpg" />
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h82/hdc/32822461431838/Top%20Brands%20Web-Biba_eoss-24.jpg"/>
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/h2c/h6f/32822462545950/Top%20Brands%20Web-Pepe_eoss-24.jpg"/>
                                <img className="img" src="https://sslimages.shoppersstop.com/sys-master/root/hd5/h48/32991718211614/Top%20Brands%20Web-Kraus_85-kd.jpg"/>
                                
                            </div>
                        </div>
                        <WomenBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Women's IndianWear</h3>  
                                    <Button className="btn" onClick={()=>viewProductDetails(1)}>View Details</Button>                 
                                </div>                    
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h9e/hbd/26668491538462/A21ZIKUCR3150_BLACK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 643</span>
                                            <span className="netPrice text-danger ml-2">Rs. 394</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h72/he2/29135810953246/IDRRY3907_RED.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1499</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1199</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h86/ha1/32035809558558/S2ZISKDCR4078RL_MAROON.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h4e/h02/27017184542750/S22ZIS2887ANDPA_CREAM.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa </h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h5c/hb9/26668440092702/A21ZIKUCR2831_BLACK.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h60/h26/29370376552478/IKUCH3867ANDPA_BROWN.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hd1/hc5/26668551995422/A21ZIKUCR3052_BLACK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 22% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h97/hb0/27920486924318/A22ZIKUCH3741_PURPLE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Ziyaa</h4></Link>
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
                                    <h3 className="mb-0 hd">  Online Exclusive for Women </h3> 
                                                  
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h70/ha4/31731497238558/GOWN108_BLUE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h13/h8a/31731964117022/MAXI28_MULTI.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h81/h73/31728229777438/MAXI02_WHITE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h91/hab/31732175175710/GOWN102_NAVY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hc4/h81/31359976538142/A23CSROYALVIRTU_BLUE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h88/hbe/31360023330846/A23JOHNYCORN_LIME_GREEN.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 33% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h46/h00/31359092195358/A23PURPLEKYRA_PURPLE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Moomaya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h0e/h70/29753824870430/A23DRSSOUL_PINK.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Kibo</h4></Link>
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
                        
                        <WomenBanner/>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Saree</h3>  
                                                     
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h51/hde/32785016225822/S24INDIE1RED_RED.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Estela</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/he6/he7/32475035992094/S24VIHRBULBULLA_LAVENDER.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>House of Begum</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h21/h42/31658436558878/S24DHLXMILERIY1_PINK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 32% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fabmora</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hfe/h50/30618136051742/S23TC1_PINK.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fabmora</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hd1/hb5/32634325794846/S24MAHABALAGREN_GREEN.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fabmora</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h08/h7a/31658527391774/S24VSGMHVERSHRD_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 30% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fabmora</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hc7/h53/32634347290654/SANVIG5WINE_PURPLE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fabmora</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h7a/h0e/31281754865694/CF411PTMORPCH1_GREEN.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Fabmora</h4></Link>
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
                        <WomenBanner/>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">  Skirt </h3>
                                                       
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h64/hb8/30027594235934/S23I-INSKIN157_MINT.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Intune</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hc3/ha4/32446376902686/MSKT1737_PINK.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Indya</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/he6/h03/31120358866974/WSKTFR11956DPR_MULTI.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 25% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Myshka</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hf5/hf4/31119995633694/WSKTFR11956YW_YELLOW.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Neudis</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 2199</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1099</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                            <div className="menProducts2">  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hca/h38/30023249592350/S23I-INSKIN156_GOLD.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Neudis</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hd7/h7b/32744653193246/S24I-TRSKIN554_MUSTARD.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Indya </h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h33/h99/31330653011998/FW23GM173SHRPSA_MAROON.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Neudis </h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hea/h3a/32444609265694/MSKT1735_RUST.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Intune</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs 1999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1399</span>
                                        </div>
                                    </div>   
                                </div>      
                            </div>
                        </div>
                                                          
                    </div>


                </div>
            </section>
            {
                isOpenWomenModal ===true && <WomenModal closeWomenModal={closeWomenModal}/>
            }
        </>
    )
}
export default Women;