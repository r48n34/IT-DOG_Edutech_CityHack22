import firebase from 'firebase/compat/app';
import { signInWithGoogle } from './services/firebaseUse';
import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import { FcGoogle } from 'react-icons/fc';
import loginIcon from './img/loginIcon.svg';

const LoginPage = () => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(false);
    let navigate = useNavigate();
  
    useEffect(() => {
  
      try{
        firebase.auth().onAuthStateChanged( (userData) => {
  
          setUser(userData);

          if(userData != null){
            navigate('/home/index');
          }
          
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
            <h5 style={{ color: "white" }}><b>IT DOG 2022 - city hack 2022 present</b></h5>
            <h1 style={{ color: "white" }}><b>Welcome to Teaccess CMS</b></h1>
            <br/><br/>   
            <div><img src={loginIcon} className="Apps-logo" alt="a logo to show login" style={{ width:"60%"}} /></div>
            <br/><br/>   
            <Button variant="light" className="button" onClick={() => signInWithGoogle()}>Login with Google <FcGoogle/> </Button> {" "}  
          </div>
  
        </Container>
      </div>
      
    )
}
  

export default LoginPage;