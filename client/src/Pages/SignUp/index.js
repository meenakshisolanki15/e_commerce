import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Logo from '../../assets/images/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import googleImg from '../../assets/images/googleImg.png'

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../../firebase';


const auth = getAuth(app);

const SignUp=()=>{


    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHeaderFooterShow(true);
    },[]);

    const [formFields, setFormFields] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    

    const signUp = ()=>{
        createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setFormFields({
                email: '',
                password: '',
                confirmPassword: ''
            })
            context.serAlertBox({
                msg:"Register Successfully!"
            });
            // ...
            })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }
    const onChangeField=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        setFormFields(()=>({
            ...formFields,
            [name]: value,
        }))
        console.log(formFields)
    }
    return(
        <section className="section signInPage signUpPage">
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
                        <h2 className="mb-4">Sign Up </h2>
                        
                         
                        <div className="form-group">
                            <TextField id="email" name="email" label="Email" type="email"  variant="standard"  className="w-100"  onChange={onChangeField} value={formFields.email}/>            
                         </div>
                        <div className="form-group">
                            <TextField id="password" name="password" label="Password" type= 'password'
                             variant="standard" className="w-100" onChange={onChangeField} value={formFields.password} />
                            
                        </div>
                        <div className="form-group">
                            <TextField id="confirm_password" name="confirm_password" label="Confirm Password" type= 'password'
                              variant="standard" className="w-100" onChange={onChangeField} value={formFields.confirmPassword} />
                            
                        </div>

                        <a className="border-effect cursor txt">
                            Forgot Password?
                        </a>
                        <div className="d-flex align-items-center mt-3 mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <Button className="btn-blue w-100 btn-lg btn-big " onClick={signUp}>Sign Up </Button>
                                </div>
                                <div className="col-md-6">
                                    <Link to="/"><Button className=" btn-lg btn-big col ml-3" 
                                    variant="outlined" onClick={()=>context.setisHeaderFooterShow(true)}>Cancel</Button></Link>
                                </div>
                            </div>
                        </div>
                        
                        <p className="txt"> Already have an account? <Link to="/signIn" className="border-effect">
                            Sign In</Link></p>

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
export default SignUp;