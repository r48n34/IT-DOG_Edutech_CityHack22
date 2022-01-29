import firebase from 'firebase/compat/app';
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../redux/counterSlice'

import LogoutBtn from "./LogoutBtn"
import { FaDog, FaCog  } from 'react-icons/fa'; //FaGhost
import '../css/navTopcss.css';

function NavTop(){
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const userData = useSelector( (state) => state.counter.userData);

    useEffect(() => {

        try{
            firebase.auth().onAuthStateChanged(async (userData) => {

                if(userData !== null){
                    
                    dispatch( setUserData({
                        uid: userData._delegate.uid,
                        displayName: userData._delegate.displayName,
                        email: userData._delegate.email,
                        photoURL: userData._delegate.photoURL,
                        creationTime: userData._delegate.metadata.creationTime,
                        lastSignInTime: userData._delegate.metadata.lastSignInTime
                    }));

                }
                else{
                    navigate('/');
                    dispatch( setUserData({}) );
                }

            })
        }
        catch(e){
          console.log(e);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div>
        <Navbar bg="light" variant="light" expand="lg" fixed="top">
        <Container fluid={true}>

            <Navbar.Brand onClick={ () => { navigate('/home/index');} } className="brandLogo">
                <b>IT DOG - City hack 2022</b> <FaDog/>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">

                <Nav>
                    <Nav.Link onClick={ () => { navigate('/home/index');} }> 
                    <Image src={userData.photoURL} roundedCircle style={{ width: "25px"}}/> Hello {userData.displayName}  
                    </Nav.Link>

                    <Nav.Link onClick={ () => { navigate('/home/drawBoard');} }> Draw Board <FaCog/> </Nav.Link>

                    <LogoutBtn format="text"/>    
                </Nav>        

            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Outlet />
        </div>
    )
}

export default NavTop