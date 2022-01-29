import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect , useState } from "react";

import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
};

function ClassTV(){

    const [currentVdoId, setCurrentVdoId] = useState("2g811Eo7K8U")


    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

            <Row>
                <Col md={4} lg={4}>
                </Col>

                <Col md={8} lg={8}>
                    <YouTube videoId={currentVdoId} opts={opts} onReady={ (e) => e.target.pauseVideo()} />

                </Col>
            </Row>

            
 
        </Container>

        </div>
    );
}

export default ClassTV