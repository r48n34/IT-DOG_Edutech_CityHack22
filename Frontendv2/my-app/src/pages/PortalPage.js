import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";

const dataArr = [
    { title: 'Kahoot', url: "https://kahoot.it/" , desc:"Online game-based learning platform.", types: "Game"},
    { title: 'Google Classroom', url: "https://classroom.google.com/" , desc:"Free blended learning platform." , types: "Management"},
    { title: 'eClass', url: "https://www.eclass.com.hk/" , desc:"Complete and feature-rich online learning platform." , types: "Management"},
    { title: 'Google drive', url: "https://www.google.com/intl/zh-TW_hk/drive/" , desc:"File storage and synchronization service ." , types: "Management"},
    { title: 'Microsoft Teams', url: "https://www.microsoft.com/zh-hk/microsoft-teams/log-in" , desc:"Proprietary business communication platform." , types: "Live"},
    { title: 'Zoom', url: "https://zoom.us/" , desc:"Zoom's secure, reliable video platform." , types: "Live"},
]

function WebsitePortalList({ data, sortStr , fillStr }){

    data = fillStr ? [...data].filter( v => v.title.toLowerCase().includes(fillStr.toLowerCase()) ) : [...data];

    return data.map( (v,i) => (
        <Col md={4} lg={3} style={{ marginBottom:"20px"}} key={v.title + i}>
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

    const [searchWord, setSearchWord] = useState("")

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

            <div style={{ textAlign:"right"}}>
                <h3 style={{ color:"white" }}>Search content</h3>
                <input type="text" onChange={ (e) => setSearchWord(e.target.value) }></input>
            </div>

            <br/> <br/>

            <Row>
                <WebsitePortalList data={dataArr} fillStr={searchWord}/>
            </Row>


        </Container>

        </div>
    );
}

export default PortalPage