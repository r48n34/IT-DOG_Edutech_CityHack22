import firebase from 'firebase/compat/app';
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from '../redux/counterSlice'

import LogoutBtn from "./LogoutBtn"
import { FaChalkboard, FaDoorClosed, FaYoutube, FaCalendarDay } from 'react-icons/fa'; //FaGhost
import '../css/navTopcss.css';

function NavTop(){
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const userData = useSelector( (state) => state.counter.userData);

    useEffect(() => {

        try{
            firebase.auth().onAuthStateChanged(async (userData) => {

                if(userData !== null){ // Login success
                    
                    dispatch( setUserData({
                        uid: userData._delegate.uid,
                        displayName: userData._delegate.displayName,
                        email: userData._delegate.email,
                        photoURL: userData._delegate.photoURL,
                        creationTime: userData._delegate.metadata.creationTime,
                        lastSignInTime: userData._delegate.metadata.lastSignInTime
                    }));

                }
                else{ //Login failed
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
                <b>Teaccess</b> 
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">

                <Nav>
                    <Nav.Link onClick={ () => { navigate('/home/setting');} }> 
                    <Image src={userData.photoURL} roundedCircle style={{ width: "25px"}}/> Hello {userData.displayName}  
                    </Nav.Link>

                    <Nav.Link onClick={ () => { navigate('/home/drawBoard'); }}> Draw Board <FaChalkboard/> </Nav.Link>
                    <Nav.Link onClick={ () => { navigate('/home/portalpage'); }}> Portal <FaDoorClosed/> </Nav.Link>
                    <Nav.Link onClick={ () => { navigate('/home/classtv'); }}> Class TV <FaYoutube/> </Nav.Link>
                    <Nav.Link onClick={ () => { navigate('/home/timetable'); }}> Timetable <FaCalendarDay/> </Nav.Link>

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