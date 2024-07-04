import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import BeautyBanner from '../../Components/BeautyBanner';


const Beauty=(props)=>{


    return(
        <>
            
            <section className="menProducts">
                <div className="container">
                    <div className="row">
                        <div className="imgWrapper">
                            <img src="https://sslimages.shoppersstop.com/sys-master/root/h15/h7f/32997211340830/Arcelia_Web_47-bcp.jpg" className="w-100"/>
                        </div>
                        
                        <div className=" productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0 hd1"> Do not miss the current offers until the end of July.</p>
                                </div>
                              
                            </div>
                        </div>
                        <BeautyBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Nars New Collections </h3>  
                                                   
                                </div>                    
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h15/hef/32524123832350/A23NARS51132068SS_BEHAVE.jpg_136Wx204H" />
                                        <span className="badge badge-primary"> 23% </span>                      
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Nars</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h38/h3a/31143794376734/A23NARS45027867SS_BAD_GUY.jpg_136Wx204H"/>
                                        <span className="badge badge-primary"> 24% </span>                       
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Nars</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hf5/h4a/31143882063902/A23NARS45012757SS_CHANTILLY.jpg_136Wx204H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Nars</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h88/h23/31143951990814/A23NARS51133508SS_KILLER_QUEEN.jpg_136Wx204H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Nars </h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1299</span>
                                            <span className="netPrice text-danger ml-2">Rs. 909</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                        </div>
                        
                    

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">  Hot Glam Treats </h3> 
                                                      
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/hdc/h78/32839214006302/Colorbar%20r.jpg" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Mac</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h5a/h80/32839214268446/Faces%20canadav45.jpg"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Yves Rocher</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h50/h24/32839213678622/Lakme5.jpg" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Yves Rocher</h4></Link>
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
                            
                        <BeautyBanner/>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Beauty Essentials </h3>  
                                                  
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h58/ha5/32839224590366/Lip_Desktopr65.jpg" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Mac</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h9c/h9e/32839224786974/Nails_Desktop56.jpg"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Mac</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h49/h9f/32839224721438/Eyes_Desktop465.jpg" />
                                        <span className="badge badge-primary"> 32% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Mac</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h5b/ha2/32839224655902/Face_Desktop465.jpg" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Mac</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1899</span>
                                            <span className="netPrice text-danger ml-2">Rs. 899</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                            
                        </div>
                        <BeautyBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">  SkinCare Saviors</h3>
                                                     
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h10/h4a/32839225114654/Plum_web76.jpg" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Kama Ayurveda</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 699</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h51/h46/32839225245726/dot-key_web65.jpg"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Kama Ayurveda</h4></Link>
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
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h40/h43/32839225311262/minimalist_web57.jpg" />
                                        <span className="badge badge-primary"> 25% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Kama Ayurveda</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1099</span>
                                            <span className="netPrice text-danger ml-2">Rs. 749</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/root/h4f/h49/32839225180190/The%20Body%20Shop_web456.jpg" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="/beauty"><h4>Kama Ayurveda</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 2199</span>
                                            <span className="netPrice text-danger ml-2">Rs. 999</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                            
                        </div>
                                                          
                    </div>


                </div>
            </section>
       
        
        </>
    )
}
export default Beauty;