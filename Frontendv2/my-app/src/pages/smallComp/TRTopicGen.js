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

export default TRTopicGen