import { Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

import { FaSun, FaWarehouse, FaSchool, FaRocket } from 'react-icons/fa'; //FaGhost

import YouTube from 'react-youtube';

const opts = {
    height: '800',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
};

function ClassTV(){

    const [currentVdoId, setCurrentVdoId] = useState("WJMCx4r0bxQ")

    function LeftchannelList(){

        const leftBoxArr = [
            { title: "Morning", titleCh: "早會", icon: (<FaSun size={70}/>) , videoId: "WJMCx4r0bxQ" },
            { title: "Hall", titleCh: "禮堂", icon: (<FaWarehouse size={70}/>) , videoId: "eK9rY-oerH8"},
            { title: "Classroom", titleCh: "教室", icon: (<FaSchool size={70}/>) , videoId: "rqCCmnbmo6I"},
            { title: "Special", titleCh: "特別教室", icon: (<FaRocket size={70}/>) , videoId: "BdYH7tueq1o"},
        ]
    
        return leftBoxArr.map( (v,i) => (
            <Col xs={6} key={v.title + i} style={{ marginBottom:"20px" }} onClick={() => setCurrentVdoId(v.videoId) }>
                <Card style={{textAlign:"center", display:"flex", justifyContent:'center', alignItems:"center"}}>
                    {v.icon}
                    <h3>{v.title}</h3>
                    <h3>{v.titleCh}</h3>
                </Card>                    
            </Col>
        ))
    }


    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

            <Row>
                <Col md={3} lg={3}>

                    <Card>      
                    <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                    />
                    </Card>

                    <Card style={{ marginTop:"20px" }}>
                        <h1><b>Youtube list</b></h1>

                        <Row>
                            <LeftchannelList />

                        </Row>

                    </Card>      

                </Col>

                <Col md={9} lg={9}>
                    <YouTube videoId={currentVdoId} opts={opts} onReady={ (e) => e.target.pauseVideo()} />

                </Col>
            </Row>
 
        </Container>

        </div>
    );
}

export default ClassTV