"use strict";

// первый скрипт 111
//let name = prompt("Ваше имя?", "");
//alert(name);






//другое окно
//let age = prompt('Сколько тебе лет?', 100);
//alert(`Тебе ${age} лет!`); // Тебе 100 лет!


//другое окно
//let isBoss = confirm("Ты здесь главный?");
//alert( isBoss ); // true, если нажата OK


//другое окно
//alert("Привет! Нажми ОК и мы попадем на страничку!!!");

var myHeading = document.querySelector('h4');
myHeading.textContent = 'Hello world!';

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');


// часы 24
function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec; /* adding time to the div */
      var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  currentTime(); /* calling currentTime() function to initiate the process */

  //<div id="clock"></div>   ЧАСЫ 12
  /* Google font 
  @import url('https://fonts.googleapis.com/css?family=Orbitron');

body {
  background-color: #121212;
}

#clock {
  font-family: 'Orbitron', sans-serif;
  color: #66ff99;
  font-size: 56px;
  text-align: center;
  padding-top: 40px;
  padding-bottom: 40px;
} */
 /*  function currentTime() {
    var date = new Date();  creating object of Date class 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";  assigning AM/PM 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);  assigning hour in 12-hour format 
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday;  adding time to the div 
        var t = setTimeout(currentTime, 1000);  setting timer 
    }
    function updateTime(k) {  appending 0 before time elements if less than 10 
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
    }
    currentTime();  */
    