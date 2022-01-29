import React from "react";
import { Tldraw } from '@tldraw/tldraw'

import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

function DrawBoard(){

    //let navigate = useNavigate();
    // useEffect( () => {

    // },[])

    return(
        <div> 
        
        {/* <Container fluid style={{ backgroundColor:"#282c34" }}>
     
        </Container> */}

        <Tldraw />

        </div>
    );
}

export default DrawBoard