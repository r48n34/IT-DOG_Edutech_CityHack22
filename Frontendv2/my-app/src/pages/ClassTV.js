import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect , useState } from "react";

import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
};

function ClassTV(){
    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={ (e) => e.target.pauseVideo()} />
 
        </Container>

        </div>
    );
}

export default ClassTV