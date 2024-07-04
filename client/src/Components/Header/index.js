import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { FaRegUserCircle } from "react-icons/fa";
import { PiHandbagSimpleLight } from "react-icons/pi";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';


const Header = () => {


    const context = useContext(MyContext);

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"> Enjoy with your <b> Online</b> shopping! </p>
                    </div>
                </div>

                <header  className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src = {Logo} alt='Logo' /> </Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length!==0 && <CountryDropdown/>
                                }
                                
                                <SearchBox/>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    {
                                        context.isLogin!==true?  <Link to="SignIn"><Button className='btn-blue  btn-round mr-3 w-100'> 
                                      <FaRegUserCircle/> </Button></Link> : <Link to="/"><Button className='circle mr-3'> <FaRegUserCircle/></Button></Link>

                                    }
                                   
                                    <div className='ml-auto cartTab d-flex align-items-center '> 
                                        <span className='price'> $3.29</span>
                                        <div className='position-relative ml-2'>
                                            <Link to="Cart"><Button className='circle '><PiHandbagSimpleLight/></Button></Link>
                                            <span className='count d-flex align-items-center justify-content-center'>4 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Navigation/>

                
            </div>
        </>
    )
}

export default Header;