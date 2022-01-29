import { Container, Row, Col, Card } from "react-bootstrap";
import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";

import { basicCallSwal } from './utility/swalCall'
import moment from 'moment'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);


function TodayAttendentsChar(){

    const attendNum = 30;
    const absentNum = 2;
    const classCurrent = "3A"
    
    const data = {
        labels: ['Absent', 'Attend'],
        datasets: [
          {
            label: 'numbers of attended',
            data: [absentNum, attendNum],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };

    return(
        <Card>
            <Card.Title style={{ textAlign:"center", paddingTop:"8px" }}> Today ({ moment().format() }) {classCurrent} attendents: </Card.Title>
            <Doughnut data={data}/> 
            <br/>
        </Card>
    )
}



function HomePage(){

    //let navigate = useNavigate();
    useEffect( () => {
        basicCallSwal()
    },[])

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>
            <h1 style={{ color:"white" }}>Teacher Dashboard</h1>

            <Row>
                <Col md={6} lg={4}>
                    <TodayAttendentsChar/>
                </Col>

                <Col md={6} lg={8}>
                    <TodayAttendentsChar/>
                </Col>

            </Row>


        </Container>

        </div>
    );
}

export default HomePage