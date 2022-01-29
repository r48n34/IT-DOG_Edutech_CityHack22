function TDGen({ data }){
    return data.map( (v, i) => (
        <tr key={i}>
        <td>{i + 1}</td>
        { Object.keys(v).map((keyName, i2) => ( <td key={v[keyName] + i2}>{v[keyName]}</td> )) }
        </tr>
    ))
}

export default TDGen