import firebase from 'firebase/compat/app';
import { signInWithGoogle } from './services/firebaseUse';
import { useState, useEffect } from 'react';

import { FcGoogle, FcManager  } from 'react-icons/fc';
import loginIcon from './img/loginIcon.svg';

import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const LoginPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(false);
    let navigate = useNavigate();
  
    useEffect(() => {
  
      try{
        firebase.auth().onAuthStateChanged( (userData) => {
          setUser(userData);
          userData != null && navigate('/home/index');  
        });
      }
      catch(e){
        console.log(e);
      }
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      
      <div style={{ backgroundColor: "#282C34" }}>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            
          <div style={{ textAlign:"center"}}>
            <h5 style={{ color: "white" }}><b>IT DOG 2022 - CityHack 2022 present</b></h5>
            <h1 style={{ color: "white" }}><b>Welcome to Teaccess CMS</b></h1>
            <br/><br/>   
            <div><img src={loginIcon} className="Apps-logo" alt="a logo to show login" style={{ width:"60%"}} /></div>
            <br/><br/>   
            <Button variant="light" className="button" onClick={() => signInWithGoogle()}>Login with Google <FcGoogle/> </Button> {" "} 
            <br/><br/>
            <h5 style={{ color: "white" }}><b>Notice: Use your own google account, not need to register.</b></h5> 
            <h5 style={{ color: "white" }}><b>Login is powered by Firebase Authentication <FcManager/> </b></h5> 
          </div>
  
        </Container>
      </div>
      
    )
}
  

export default LoginPage;