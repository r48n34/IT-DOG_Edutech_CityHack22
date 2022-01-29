import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

import { basicCallSwal } from './utility/swalCall'

function HomePage(){

    //let navigate = useNavigate();
    useEffect( () => {
        basicCallSwal()
    },[])

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

        </Container>

        </div>
    );
}

export default HomePage