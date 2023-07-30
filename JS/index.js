//let screen = document.getElementById('screen');
//let main = document.getElementById('main');
//mainscreen

const screenblock = ()=>{
    document.getElementById("screen").style.display = "none"; 
    document.getElementById("main").style.display = "block";
};
const mainscreen = ()=>{
    document.getElementById("screen").style.display = "block"; 
    document.getElementById("main").style.display = "none"; 
};


//display times and date
{
var today = new Date();
var hours = today.getHours();
var minuts = today.getMinutes();
var dayname = today.toLocaleString('default',{weekday:'short'});
var datmonth = today.toLocaleString('default',{month:'short'});
var daynumber = today.getDate();
var ampm = 'AM';
if(hours>12){
    ampm = 'PM';
}

//12 hourse formate
hours = hours>12 ? hours % 12 : hours;

//0 on 
if(hours<10){
    hours = "0"+hours;
}
if(minuts<10){
    minuts = "0"+minuts;
}

document.getElementById('hours').innerHTML= hours;
document.getElementById('minutes').innerHTML= minuts;
document.getElementById('dayname').innerHTML= dayname;
document.getElementById('monthname').innerHTML= datmonth;
document.getElementById('daynumber').innerHTML= daynumber;
document.getElementById('ampm').innerHTML= ampm;
}//


//walpaper change
const wallpaperChanger = ()=>{
    document.getElementById('choosewalpaper').style.display = 'block';
    document.getElementById('walpaper').style.display = 'none';
}
const backtosetting = ()=>{
    document.getElementById('choosewalpaper').style.display = 'none';
    document.getElementById('walpaper').style.display = 'block';
}

//goto setting
const settingopen = ()=>{
document.getElementById('walpaper').style.display = 'block';
document.getElementById('main').style.display = 'none';
}

//goto index
const settingout =()=>{
    document.getElementById('walpaper').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

const wallchange1 =()=>{
    document.getElementById('mobile').style.backgroundImage="url('../img/walpaper.jpg')"
}
const wallchange2 =()=>{
    document.getElementById('mobile').style.backgroundImage="url('../img/walpaper2.jpg')"
}
const wallchange3 =()=>{
    document.getElementById('mobile').style.backgroundImage="url('../img/walpaper3.jpg')"
}
const wallchange4 =()=>{
    document.getElementById('mobile').style.backgroundImage="url('../img/wal4.jpg')"
}
const wallchange5 =()=>{
    document.getElementById('mobile').style.backgroundImage="url('../img/wal5.jpg')"
}
const wallchange6 =()=>{
    document.getElementById('mobile').style.backgroundImage="url('../img/wal6.jpg')"
}
