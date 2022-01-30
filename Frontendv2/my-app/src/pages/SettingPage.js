import { Container, Card, Table } from "react-bootstrap";
import { useSelector} from 'react-redux'

import { useEffect, useState } from "react";
import { generateStudentArry } from './utility/studentGenerate'

import TRTopicGen from "./smallComp/TRTopicGen";
import TDGen from "./smallComp/TDGen";

import NameCard from './smallComp/settingComp/NameCard'

function SettingPage(){

    const userData = useSelector( (state) => state.counter.userData);
    const [studentData, setStudentData] = useState([])

    useEffect( () => {
        setStudentData( generateStudentArry(30) ) // generate 30 students
    },[])

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

            <h1 style={{ color: "white"}}><b>Teacher info:</b></h1>
            <NameCard userInfo={userData}/>
            <br/>

            <h1 style={{ color: "white"}}><b>Class info:</b></h1>

            <Card>
                <Table striped bordered hover >
                    <thead>
                        <TRTopicGen data={studentData} />
                    </thead>
                    <tbody>
                        <TDGen data={studentData} />
                    </tbody>
                </Table>
            </Card>

        </Container>

        </div>
    );
}

export default SettingPage