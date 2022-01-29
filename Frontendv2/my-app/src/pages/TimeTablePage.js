import { Container, Card, Table } from "react-bootstrap";

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid';

import { useEffect } from "react";

const dateEvent = [
    { title: '4B Chinese lessons', start: '2022-01-31T10:00:00', end: '2022-01-31T13:00:00', description: 'Lecture' },
    { title: 'Chinese Dept meeting', start: '2022-01-31T16:00:00', end: '2022-01-31T17:00:00', description: 'Lecture' },
    { title: 'Sports Day', date: '2022-02-01' },
    { title: 'Sports Day Holdiay', date: '2022-02-02' },
    { title: '3B Chinese lessons', start: '2022-02-03T09:00:00', end: '2022-02-03T11:00:00', description: 'Lecture' },
]

function TimeTablePage(){

    return(
        <div> 
        <br/><br/><br/>
        
        <Container fluid style={{ backgroundColor:"#282c34" }}>

        <Card>      
            <FullCalendar
                plugins={[ timeGridPlugin ]}
                initialView="timeGridWeek"
                events={ dateEvent }
            />
        </Card>

        </Container>

        </div>
    );
}

export default TimeTablePage