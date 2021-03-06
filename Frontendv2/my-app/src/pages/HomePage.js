import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { addNoticesData, addOneNoticesData } from './redux/counterSlice';

import { basicCallSwal, addClassEventSwal } from './utility/swalCall'
import moment from 'moment'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import TDGen from './smallComp/TDGen'
import TRTopicGen from './smallComp/TRTopicGen'

import { getLocalStoreArr } from './utility/localStoreUtili'

ChartJS.register(ArcElement, Tooltip, Legend);

function TodayAttendentsChar(){

    const attendNum = 30;
    const absentNum = 2;
    const classCurrent = "6A"
    
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

const assignmentArray = [
    { subject: "Chinese" , title:"book 2 exe p.18-9", principal:"Kenneth" },
    { subject: "Chinese" , title:"Revision" , principal:"Kenneth"},
    { subject: "Math" , title:"ws3 all" , principal:"開開"},
];

const noticeArray = [
    { types: "School notice" , title:"School holiday", deadline:"30-01-2022" },
    { types: "School notice" , title:"Cov-19 notices" , deadline:"05-02-2022"},
    { types: "EDB notice" , title:"CIRCULAR MEMORANDUM NO. 1/2022" , deadline:"08-02-2022"},
    { types: "Class notice" , title:"Wash hand and take care!!!" , deadline:" N/A"},
    { types: "Class notice" , title:"Career talk reminder" , deadline:" N/A"},
]

function HomePage(){

    // eslint-disable-next-line no-unused-vars
    const [assignmentData ,setAssignmentData] = useState(assignmentArray);

    const noticeData = useSelector( (state) => state.counter.noticesData);
    const userData = useSelector( (state) => state.counter.userData);

    const dispatch = useDispatch();

    useEffect( () => {
        basicCallSwal( userData.displayName );

        let nData = getLocalStoreArr("noticesData");
        nData.length === 0 && dispatch( addNoticesData(noticeArray) );
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    function AssignmentAndNoticesBoard({ assignmentData , noticeData }){

        return(
            <Card>
    
                <h2 style={{ marginLeft:"10px", marginTop:"8px"}}> Today assignment:</h2>
                <Table striped bordered hover >
                    <thead>
                        <TRTopicGen data={assignmentData} />
                    </thead>
                    <tbody>
                        <TDGen data={assignmentData} />
                    </tbody>
                </Table>
    
                <h2 style={{ marginLeft:"10px"}}> Today notice:</h2>
                <Table striped bordered hover >
                    <thead>
                        <TRTopicGen data={noticeData} />
                    </thead>
                    <tbody>
                        <TDGen data={noticeData} />
                    </tbody>
                </Table>
    
                <Button variant="dark" onClick={ async () => { 
                    let val = await addClassEventSwal();

                    if(val){
                        dispatch( addOneNoticesData([{ types: val[0] , title: val[1], deadline: val[2] }]) )
                    }
                       
                }}>Add class event</Button>
    
            </Card>
        )
    }

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>
            <h1 style={{ color:"white" }}>Teacher Dashboard ( {userData.displayName} ) (Class 6A)</h1>

            <Row>
                <Col md={6} lg={4}>
                    <TodayAttendentsChar/>
                </Col>

                <Col md={6} lg={8}>
                    <AssignmentAndNoticesBoard assignmentData={assignmentData} noticeData={noticeData}/>
                </Col>
            </Row>

        </Container>

        </div>
    );
}

export default HomePage