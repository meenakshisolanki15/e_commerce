import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Route, Router , Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header  from "./Components/Header";
import { Fragment, createContext } from "react";
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Listing from "./Pages/Listing";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import SignIn from "./Pages/SignIn";
import SignUP from "./Pages/SignUp";
import Beauty from "./Pages/Beauty";
import HomeStop from "./Pages/HomeStop";
import Kids from "./Pages/Kids";
import Men from "./Pages/Men";
import Watches from "./Pages/Watches";
import Women from "./Pages/Women";
import MenDetails from "./Pages/MenDetails";
import WomenDetails from "./Pages/WomenDetails";
import Cart2 from "./Pages/Cart2";


const MyContext = createContext();

function App() {

  

  const [countryList, setCountryList] = useState([]);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState();
  
  
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries/");

    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  },[]);

  const getCountry=async (url)=>{
    const responseive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data)
      console.log(res.data.data )
    })
  }
  

  const signIn=()=>{
    const is_Login = localStorage.getItem('isLogin');
    setIsLogin(is_Login);
  }

  const values = {
    countryList,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isLogin,
    setIsLogin,
    signIn

  }
  return (
    <BrowserRouter>
    <MyContext.Provider value = {values}>
    {
        isHeaderFooterShow === true && <Header />
    }
      
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
        <Route path="/cat/:id" exact={true} element={<Listing />}/>
        <Route exact={true} path="/product/:id" element={<ProductDetails />}/>
        <Route exact={true} path="/cart" element={<Cart />}/>
        <Route exact={true} path="/cart2" element={<Cart2 />}/>
        <Route exact={true} path="/signIn" element={<SignIn />}/>
        <Route exact={true} path="/signUP" element={<SignUP />}/>
        <Route exact={true} path="/beauty" element={<Beauty />}/>
        <Route exact={true} path="/homestop" element={<HomeStop />}/>
        <Route exact={true} path="/kids" element={<Kids />}/>
        <Route exact={true} path="/men" element={<Men />}/>
        <Route exact={true} path="/men/product/:id" element={<MenDetails/>}/>
        <Route exact={true} path="/watches" element={<Watches />}/>
        <Route exact={true} path="/women" element={<Women />}/>
        <Route exact={true} path="/women/product/:id" element={<WomenDetails/>}/>
        
      </Routes>

      {
        isHeaderFooterShow === true && <Footer/>
      }
      
    </MyContext.Provider>
  </BrowserRouter>
  );
}

export default App;

export {MyContext}