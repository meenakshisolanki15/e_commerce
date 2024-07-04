import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from '../../assets/images/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import googleImg from '../../assets/images/googleImg.png';
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SignIn=()=>{

    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHeaderFooterShow(true);
    },[]);


    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    const history = useNavigate();

    const onChangeField=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        setFormFields(()=>({
            ...formFields,
            [name]: value,
        }))
    }
    

    const signIn=()=>{

        signInWithEmailAndPassword(auth, formFields.email, formFields.password)
        .then((userCredential) => {
      
            const user = userCredential.user;
     
            setFormFields({
                email: '',
                password: ''
            });
            localStorage.setItem('isLogin',true);
            context.signIn();

            history('/');
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }


    

    return(
        <section className="section signInPage">
            <div className="shape-bottom"> <svg fill="#fff" id ="Layer_1" x ="0px" y ="0px" viewBox="0
            0 1921 819.8" style={{enableBackground:'new 0 0 1921 819.8'}}><path class="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.
            1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path> </svg> 
            </div>
            <div className="container">
                <div className="box card p-3 shadow border-0">
                    <div className="text-center">
                        <img src={Logo}>
                        </img>
                    </div>


                    <form className="mt-3"> 
                        <h2 className="mb-4">Sign   In </h2>
                        <div className="form-group">
                        <TextField id="email" label="Email" type="email" name='email' className="w-100"onChange={onChangeField} value={formFields.email} />            
                         </div>
                        <div className="form-group">
                            <div className="position-relative">
                                <TextField id="password" label="Password" type='password'
                                name='password' className="w-100" onChange={onChangeField} value={formFields.password}/>
                            </div>
                        </div>

                        <a className="border-effect cursor txt">
                            Forgot Password?
                        </a>
                        <div className="d-flex align-items-center mt-3 mb-3">
                            <div className="row w-100">
                                <div className="col-md-6">
                                    <Button className="btn-blue w-100 btn-lg btn-big " onClick={signIn}>Sign In </Button>
                                </div>
                                <div className="col-md-6">
                                    <Link to="/" className="d-block w-100"><Button 
                                    className=" btn-lg btn-big w-100 " 
                                    variant="outlined" onClick={()=>context.setisHeaderFooterShow(true)}>Cancel</Button></Link>
                                </div>
                            </div>
                        </div>
                        
                        <p className="txt"> Not Registered? <Link to="/signUp" className="border-effect">
                            Sign Up</Link></p>

                        <h6 className="mt-4 text-center font-weight-bold">
                            Or continue with social account
                        </h6>
                        <span className="cursor"> <img src={googleImg} className="w-100"/></span>

                        <br/>
                    </form>

                    
                 </div>
                    
            </div>
        </section>
    )
}
export default SignIn;