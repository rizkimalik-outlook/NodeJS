//? static import

function replace() {  
    let username = 'candra';
    let userid = '3977069165701618';
    let Pesan = '@[3977069165701618] ini coba tag';
    let StrPesan = Pesan.replace(`@[${userid}]`, username);
	console.log(StrPesan);
}
replace();

//> import * as Util from './coba.js';
// const Util =  await import('./coba.js');

// Util.DashAgentOnline();

function chekct() { 
    const btn = document.querySelector("input[name=cek]:checked");
    console.log(btn.getAttribute('data-reply'));
 }
//  chekct()

//dinamyc import
async function load() {
    var myHeaders = new Headers();
myHeaders.append("Accept", "*/*");
myHeaders.append("Cache-Control", "no-cache");
myHeaders.append("Content-Type", "multipart/form-data");
myHeaders.append("Content-Length", "480");
// myHeaders.append("Cookie", "PHPSESSID=75d221e015b1d5ac1c26549d37bea8dd");

var formdata = new FormData();
formdata.append("pagetoken", "EAAHB4P6XPywBAHZCpCnXdYg7muHvkYiskFrQ1fq18QfvpqnWvBd4L53C4We2M1aJDfvRuhZC415AQs0NJs5wHTwikzWVBQSy3tCoYfRJO9ZC7qQcfnXJNF9ASrEKJhgjKun1ZAMtKyaS266eVPp1oPn5qMyG4FHZAbgOD4g27PPuFi62XRIMgZA9rKpDufHDwZD");
formdata.append("pageid", "374215903210349");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://mendawai.com/sosialapi/sosial/facebook/facebook/getfeed", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
// load();

document.querySelector('#btnload').addEventListener('click',load)

const functionName = async () => {
    const response = await fetch('http://localhost:8001/master/GetStatus', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data);
};
// functionName();

function addZero(x) {
	if (x < 10) {
		x = "0" + x;
	}
	return x;
}

Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
    value: function() {
        function pad(n) {  // always returns a string
            return (n < 10 ? '0' : '') + n;
        }

        return this.getFullYear() +
                pad(this.getMonth() + 1) + 
                pad(this.getDate()) +
                pad(this.getHours()) +
                pad(this.getMinutes()) +
                pad(this.getSeconds());
    }
});

const GetDateTime = () => {
    /* const date = new Date(),
    Y = addZero(date.getFullYear()), M = addZero(date.getMonth()), D = addZero(date.getDate()), 
    h = addZero(date.getHours()), m = addZero(date.getMinutes()), s = addZero(date.getSeconds());
    document.querySelector('.getdatetime').innerText = `${Y}-${M}-${D} ${h}:${m}:${s}`;
    return date; */
    console.log(new Date().YYYYMMDDHHMMSS());
    console.log(Date.now());
}
// const tes = 
// GetDateTime();



// console.log(GetDateTime);

// setInterval(load, 1000);
// console.log(Util.square());

// let d = new Date();
// let year = d.getFullYear();
// let month = d.getMonth();
// let date = d.getDate();
// let ms = d.getMilliseconds();

// console.log(now.toDateString()); // Wed Dec 06 2017
// console.log(now.toTimeString()); // 19:23:42 GMT-0800 (PST)
// console.log(now.toLocaleDateString()); // 12/6/2017
// console.log(now.toLocaleString()); // 12/6/2017, 7:20:28 PM
// console.log(now.toLocaleTimeString()); // 7:20:51 PM
// console.log(now.toUTCString()); // Thu, 07 Dec 2017 03:21:14 GMT

// console.log(now.getDate()); 
// console.log(now.getUTCMonth()); 
// var res = now.toISOString().slice(0,10).replace(/-/g,"");
// console.log(ms); 
// const par = JSON.stringify({nama:'ada',no:'123'});


/* function tes(val){
    console.log(JSON.parse(val));
}
const par = JSON.stringify({"nama":'ada',no:'123'});
tes(par);

let diskon = 10 / 100;
let biaya = 50000;
let total = biaya - (biaya * diskon); */

// console.log(total)
// debugger;