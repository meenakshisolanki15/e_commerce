

import Rating from '@mui/material/Rating';
import { Link } from "react-router-dom";
import HomestopBanner from '../../Components/HomestopBanner';


const HomeStop=(props)=>{

    
    return(
        <>
            
            <section className="menProducts">
                <div className="container">
                    <div className="row">
                        <div className="imgWrapper">
                            <img src="https://sslimages.shoppersstop.com/sys-master/root/h69/h2a/32959279300638/Spread-web_220624rf.jpg" className="w-100"/>
                        </div>
                        
                        <div className=" productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0 hd1"> Do not miss the current offers until the end of July.</p>
                                </div>
                              
                            </div> 
                        </div>
                        <HomestopBanner/>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd"> Double Bedsheet </h3>  
                                                   
                                </div>                    
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h94/hc6/29324463570974/S23BED120013_MULTI.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Hosta Homes</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1099</span>
                                            <span className="netPrice text-danger ml-2">Rs. 799</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h11/haa/32279045308446/KLBF1010_BEIGE.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 24% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Cortina</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 2999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1399</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h10/h13/32660149501982/HHFTDDBLBRWN_BROWN.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>Portico</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 2999</span>
                                            <span className="netPrice text-danger ml-2">Rs. 1299</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hec/h30/29724436496414/S23BED120055_MULTI.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop </h4></Link>
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
                                    <h3 className="mb-0 hd">  Decor </h3> 
                                                      
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h39/h48/30221516210206/MSBIH106_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 56% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>EcraftIndia</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 1199</span>
                                            <span className="netPrice text-danger ml-2">Rs. 699</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h7e/ha6/30221643350046/AAC500_NoColour.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 28% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>EcraftIndia</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 499</span>
                                            <span className="netPrice text-danger ml-2">Rs. 199</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hc5/h7b/32430194720798/BONPOT1050_NoColour.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 399</span>
                                            <span className="netPrice text-danger ml-2">Rs. 199</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/ha2/hea/29587479724062/S23LIV150138_GREEN.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 299</span>
                                            <span className="netPrice text-danger ml-2">Rs. 199</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                        </div>

                        <HomestopBanner/>
                        
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">  Kitchen </h3> 
                                                      
                                </div>                     
                            </div>
                            <div className="menProducts1">
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h2b/h47/32199606370334/S24KIT150051_WHITE.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 27% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 399</span>
                                            <span className="netPrice text-danger ml-2">Rs. 199</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/hce/h44/26984289206302/A21STANSET19661_MULTI.jpg_230Wx334H"/>
                                        <span className="badge badge-primary"> 50% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 299</span>
                                            <span className="netPrice text-danger ml-2">Rs. 199</span>
                                        </div>
                                    </div>   
                                </div>  
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h14/haf/29902618525726/A22KIT510127_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 26% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 199</span>
                                            <span className="netPrice text-danger ml-2">Rs. 99</span>
                                        </div>
                                    </div>   
                                </div>
                                <div className={`productItem ${props.itemView}`}>
                                    <div className="imgWrapper">
                                        <img src="https://sslimages.shoppersstop.com/sys-master/images/h17/hef/29905969119262/S23KIT160039_GREY.jpg_230Wx334H" />
                                        <span className="badge badge-primary"> 23% </span>
                                        
                                    </div>
                                    <div className="info">
                                        <Link to="product/:id"><h4>HomeStop</h4></Link>
                                        <span className="text-success d-block"> In Stock</span>
                                        <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>
                                        <div className="d-flex">
                                            <span className="oldPrice">Rs. 349</span>
                                            <span className="netPrice text-danger ml-2">Rs. 209</span>
                                        </div>
                                    </div>   
                                </div>  
                                
                            </div>
                        </div>
                            
                        <HomestopBanner/>
                        
                                                          
                    </div>


                </div>
            </section>
            
        </>
    )
}

export default HomeStop;