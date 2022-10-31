"use strict";

let buttons = Array.from(document.getElementsByClassName("button"));
let operationScreen = document.getElementById("theOperationScreen");
let answerScreen = document.getElementById("theAnswer");
let operation = 0;
//---------------------------------------------------------------------
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "Ac":
        operationScreen.innerText = "";
        answerScreen.innerText = "";
        break;

      case "=":
        try {
          switch (e.target.innerText) {
            default:
              answerScreen.innerText = eval(operationScreen.innerText);
              operationScreen.innerText = "";
          }
          break;
        } catch {
          operationScreen.innerText = "Error!";
          break;
        }
      default:
        operationScreen.innerText += e.target.innerText;
        answerScreen.innerText = "";
    }
  });
});

let remove = document.getElementById("removeBox");

remove.addEventListener("click", (e) => {
  operationScreen.innerText = operationScreen.innerText.slice(0, -1);
});
