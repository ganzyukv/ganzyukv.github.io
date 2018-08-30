import {readFile} from "./data";

function getData() {
    let data = readFile();
    let dataArr = data.split("\n");
    dataArr = dataArr.map((el) => {
        return el.split(',');
    });
    dataArr.shift();
    return dataArr;
}

function getTotal(dataArr) {
    return dataArr.reduce(function (sum, cur) {
        return sum + (cur[3] * 1);
    }, 0);
}

function getAvgBy(dataArr, col = 0) {
    let result = [];
    dataArr.reduce(function (sum, cur) {
        let current = cur[col]+'';
        result[current] = isNaN(result[current]) ? 0 : result[current];
        result[current] = result[current] + (cur[3] * 1);
        return sum + (cur[3] * 1)
    }, 0);

    for(let prop in result){
        let arr = dataArr.filter(function(el){
            return el[col] == prop;
        });
        result[prop] = result[prop] / arr.length - 1;
    }
    return result;
}

export {getData, getTotal, getAvgBy}