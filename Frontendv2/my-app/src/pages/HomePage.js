import { Container, Row, Col, Card, Table } from "react-bootstrap";
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




function AssignmentAndNoticesBoard(){

    const assignmentArray = [
        { subject: "Chinese" , title:"book 2 exe p.18-9", principal:"Kenneth" },
        { subject: "Chinese" , title:"Revision" , principal:"Kenneth"},
        { subject: "Math" , title:"ws3 all" , principal:"開開"},
    ];

    const noticeArray = [
        { types: "School notice" , title:"book 2 exe p.18-9", deadline:"30-01-2022" },
        { types: "School notice" , title:"Revision" , deadline:"05-02-2022"},
        { types: "Class notice" , title:"Wash hand and take care!!!" , deadline:" N/A"},
    ]

    function TDGen({ data }){
        return data.map( (v, i) => (
            <tr key={i}>
            <td>{i + 1}</td>
            { Object.keys(v).map((keyName, i2) => ( <td key={v[keyName] + i}>{v[keyName]}</td> )) }
            </tr>
        ))
    }

    function TRTopicGen({ data }){
        const heading = []

        for (let i in data[0]){
            heading.push(<th key={i}>{i}</th>)
        }

        return(
            <tr>
            <th>No. </th>
            {heading.map( (v,i) => v )}
            </tr>
        )
    }

    return(
        <Card>
            <h2 style={{ marginLeft:"10px"}}> Today assignment:</h2>

            <Table striped bordered hover >
                <thead>
                    <TRTopicGen data={assignmentArray} />
                </thead>
                <tbody>
                    <TDGen data={assignmentArray} />
                </tbody>
            </Table>

            <h2 style={{ marginLeft:"10px"}}> Today notice:</h2>
            <Table striped bordered hover >
                <thead>
                    <TRTopicGen data={noticeArray} />
                </thead>
                <tbody>
                    <TDGen data={noticeArray} />
                </tbody>
            </Table>


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
                    <AssignmentAndNoticesBoard/>
                </Col>
            </Row>

        </Container>

        </div>
    );
}

export default HomePage