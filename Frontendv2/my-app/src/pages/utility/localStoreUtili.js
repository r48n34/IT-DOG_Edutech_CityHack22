function setArrToLocalStore( keyName, obj ){

    let oblObj = localStorage.getItem(keyName)

    if(!oblObj){
        let temp = JSON.stringify(obj)
        localStorage.setItem(keyName,temp)
    }
    else{
        oblObj.push(obj)
        let temp = JSON.stringify(oblObj)
        localStorage.setItem(keyName,temp)
    }

}

function getLocalStoreArr(keyName){
    return JSON.parse(localStorage.getItem(keyName)) || []
}

export {setArrToLocalStore, getLocalStoreArr}
