import { uniqueNamesGenerator, names} from 'unique-names-generator';

import boyNameArr from '../jsonData/chineseNameBoy.json'
import girlNameArr from '../jsonData/chineseNameGirl.json'
import lastName100aRR from '../jsonData/lastName100.json'

const config = {
    dictionaries: [names]
}

function generateStudentArry(num){
    let arr = []

    if(!num || num <= 0 ){
        num = 1
    }

    for(let i = 0; i < num; i ++){
        const gender = Math.random() >= 0.5 ? "M" : "F";

        let lastname = gender === "M" ? boyNameArr[ Math.floor( Math.random() * boyNameArr.length) - 1 ] : girlNameArr[ Math.floor( Math.random() * girlNameArr.length) - 1];

        if(!lastname){
            lastname = "開開";
        }

        let firstname = lastName100aRR.nameStr[ Math.floor( Math.random() * lastName100aRR.nameStr.length) - 1 ];

        arr.push({ 
            engName: uniqueNamesGenerator(config), 
            chineseName: firstname + lastname, 
            gender: gender,
            classNo: i + 1,
            society: Math.random() >= 0.5 ? "Red" : "Purple",
            attendents: Math.random() >= 0.9 ? "X" : "O",
        })
    }

    return arr

}

export { generateStudentArry }