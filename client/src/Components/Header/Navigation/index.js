import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineWoman2 } from "react-icons/md";
import { MdMan } from "react-icons/md";
import { TbDeviceWatchExclamation } from "react-icons/tb";
import { FaChildDress } from "react-icons/fa6";
import { FcBusinesswoman } from "react-icons/fc";
import { LiaBedSolid } from "react-icons/lia";



const Navigation=()=>{

    
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Link to="cat/:id">
                                <Button className='allCatTab align-items-center' > 
                                    <span className='icon1 mr-2'><IoIosMenu/></span>
                                    <span class="text"> All CATEGORIES</span> 
                                    <span className='icon2 ml-2'><FaAngleRight/></span>
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'> 
                                <Link to="/"><Button><RiHome2Line/> &nbsp; Home</Button></Link>
                                    <div className='submenu shadow'>
                                        <Link to="/men"><Button>Clothing</Button></Link>
                                        <Link to="/kids"><Button>Toys</Button></Link>
                                        <Link to="/watches"><Button>Watches</Button></Link>
                                        <Link to="/beauty"><Button>Make Up</Button></Link>
                                        <Link to="/women"><Button>Indian Wear </Button></Link>
                                    </div>
                            </li>
                            <li className='list-inline-item'> 
                                <Link to="/women"><Button> <MdOutlineWoman2/>Women</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/women"><Button>Indian Wear</Button></Link>
                                        <Link to="/watches"><Button>Watches</Button></Link>
                                        <Link to="/women"><Button>Saree</Button></Link>
                                        <Link to="/women"><Button>Skirt</Button></Link>
                                        
                                    </div>
                            </li>
                            <li className='list-inline-item'> 
                                <Link to="/men"><Button><MdMan/>Men</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/men"><Button>Clothing</Button></Link>
                                        <Link to="/men"><Button>Shirts</Button></Link>
                                        <Link to="/watches"><Button>Watches</Button></Link>
                                        <Link to="/men"><Button>Jeans</Button></Link>
                                                          
                                    </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/beauty"><Button><FcBusinesswoman/>Beauty</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/beauty"><Button>Make Up </Button></Link>
                                        <Link to="/beauty"><Button>Skin Care</Button></Link>
                                        <Link to="/beauty"><Button>Bath & Body</Button></Link>
                                        <Link to="/beauty"><Button>Nails</Button></Link>
                                        <Link to="/beauty"><Button>Hair Care</Button></Link>
                                    </div>
                            </li>
                            <li className='list-inline-item'> 
                                <Link to="/kids"><Button><FaChildDress/>Kids</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/kids"><Button>Clothing </Button></Link>
                                        <Link to="/watches"><Button>Watches</Button></Link>
                                        <Link to="/kids"><Button>Toys</Button></Link>
                                        
                                    </div>
                            </li>
                            <li className='list-inline-item'> 
                                <Link to="/homestop"><Button><LiaBedSolid/>HomeStop</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/homestop"><Button>Bedding</Button></Link>
                                        <Link to="/homestop"><Button>Home Furnishing</Button></Link>
                                        <Link to="/homestop"><Button>Decor</Button></Link>
                                        <Link to="/homestop"><Button>Kitchen & Dining</Button></Link>
                    
                                    </div>
                            </li>
                            <li className='list-inline-item'> 
                                <Link to="/watches"><Button><TbDeviceWatchExclamation/>Watches</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to="/watches"><Button>Mens Watches</Button></Link>
                                        <Link to="/watches"><Button>Women Watches</Button></Link>
                                        <Link to="/watches"><Button>Kids Watches</Button></Link>
                                        
                                    </div>
                            </li>
                            
                    
                        </ul>

                    </div>
                </div>
            </div>
        </nav>
    )
}
 export default Navigation;