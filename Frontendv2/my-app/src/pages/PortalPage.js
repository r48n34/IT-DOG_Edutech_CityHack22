import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

const dataArr = [
    { title: 'Kahoot', url: "https://kahoot.it/" , desc:"Online game-based learning platform.", types: "Game"},
    { title: 'Google Classroom', url: "https://classroom.google.com/" , desc:"Free blended learning platform." , types: "Management"},
    { title: 'eClass', url: "https://www.eclass.com.hk/" , desc:"Complete and feature-rich online learning platform." , types: "Management"},
    { title: 'Microsoft Teams', url: "https://www.microsoft.com/zh-hk/microsoft-teams/log-in" , desc:"Proprietary business communication platform." , types: "Live"},
    { title: 'Zoom', url: "https://zoom.us/" , desc:"Zoom's secure, reliable video platform." , types: "Live"},
]

function WebsitePortalList({ data }){
    return data.map( (v,i) => (
        <Col md={4} lg={3} style={{ marginBottom:"20px"}}>
            <Card>

            <Card.Header> {v.types} </Card.Header>

            <Card.Body>
                <Card.Title>{v.title}</Card.Title>
                <Card.Text>
                {v.desc}
                </Card.Text>
                <a href={v.url} target={"_blank"} rel="noreferrer">
                    <Button variant="primary">Go</Button>
                </a>
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