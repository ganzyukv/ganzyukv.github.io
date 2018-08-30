import {getData, getTotal, getAvgBy} from './function.js';

let dataArr = getData(),
    avgByMonth = getAvgBy(dataArr),
    avgByDepartment = getAvgBy(dataArr, 1),
    total = document.getElementById('total'),
    avgMonth = document.getElementById('avgMonth'),
    avgDepartment = document.getElementById('avgDepartment');

total.innerText = (getTotal(dataArr)).toFixed(2);

for (let prop in avgByMonth) {
    avgMonth.innerHTML = avgMonth.innerHTML +
        '<tr>' +
        '<td>' + prop + '</td>' +
        '<td>' + avgByMonth[prop].toFixed(2) + '</td>' +
        '</tr>';
}

for (let prop in avgByDepartment) {
    avgDepartment.innerHTML = avgDepartment.innerHTML +
        '<tr>' +
        '<td>' + prop + '</td>' +
        '<td>' + avgByDepartment[prop].toFixed(2) + '</td>' +
        '</tr>';
}