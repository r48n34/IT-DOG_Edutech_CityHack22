import { Table } from "react-bootstrap";

function TDGen({ data }){
    return data.map( (v, i) => (
        <tr key={i}>
        <td>{i + 1}</td>
        { Object.keys(v).map((keyName, i2) => ( <td key={v[keyName] + i2}>{v[keyName]}</td> )) }
        </tr>
    ))
}

function TRTopicGen({ data }){
    const heading = []

    for (let i in data[0]){
        heading.push(<th key={"header" + i}>{i}</th>)
    }

    return(
        <tr>
        <th>No. </th>
        {heading.map( (v,i) => v )}
        </tr>
    )
}

function BootsTable({ data }){

    return(
        <Table striped bordered hover >
            <thead>
                <TRTopicGen data={data} />
            </thead>
            <tbody>
                <TDGen data={data} />
            </tbody>
        </Table>
    );
}

export default BootsTable