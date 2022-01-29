import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

const dataArr = [
    { title: 'Kahoot', url: "https://kahoot.it/" , desc:"Online game-based learning platform."},
    { title: 'Google Classroom', url: "https://classroom.google.com/" , desc:"Free blended learning platform."},
    { title: 'eClass', url: "https://www.eclass.com.hk/" , desc:"Complete and feature-rich online learning platform."},
    { title: 'Microsoft Teams', url: "https://www.microsoft.com/zh-hk/microsoft-teams/log-in" , desc:"Proprietary business communication platform."},
    { title: 'Zoom', url: "https://zoom.us/" , desc:"Zoom's secure, reliable video platform."},
]

function WebsitePortalList({ data }){
    return data.map( (v,i) => (
        <Col md={4} lg={3}>
            <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </Col>

    ))
}

function PortalPage(){

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

            <Row>
                <WebsitePortalList data={dataArr}/>
            </Row>


        </Container>

        </div>
    );
}

export default PortalPage