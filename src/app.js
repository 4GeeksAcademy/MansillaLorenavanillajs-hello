/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");

  function randomelement(arreglo) {
    let arregloindex = Math.floor(Math.random() * arreglo.length);
    return arreglo[arregloindex];
  }

  function generateExcuse() {
    let who = ["A unicorn", "Wonder Woman", "A dancing penguin"];
    let action = [
      "did a somersault",
      "sang opera",
      "dressed up as a dinosaur",
      "told a terrible joke"
    ];
    let what = [
      "in the middle of the office",
      "at the supermarket",
      "during a conference"
    ];
    let when = [
      "yesterday afternoon",
      "Last weekend",
      "five minutes ago",
      "Last Monday"
    ];

    return (
      randomelement(who) +
      " " +
      randomelement(action) +
      " " +
      randomelement(what) +
      " " +
      randomelement(when) +
      ""
    );
  }
};
