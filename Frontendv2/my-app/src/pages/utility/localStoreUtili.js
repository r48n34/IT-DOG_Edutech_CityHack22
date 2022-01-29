function setArrToLocalStore( keyName, obj ){

    let oblObj = localStorage.getItem(keyName)

    if(!oblObj){
        let temp = JSON.stringify(obj)
        localStorage.setItem(keyName,temp)
    }
    else{
        let temp = JSON.parse(oblObj)
        console.log(temp);
        console.log(obj);
        temp.push(...obj)

        temp = JSON.stringify(temp)
        localStorage.setItem(keyName,temp)
    }

}

function getLocalStoreArr(keyName){
    return JSON.parse(localStorage.getItem(keyName)) || []
}

export {setArrToLocalStore, getLocalStoreArr}
