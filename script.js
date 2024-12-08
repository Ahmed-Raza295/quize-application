var htmlQuiz = [
    {
      question: "HTML Stands for ?",
      option1: "Hypertext",
      option2: "Markup",
      option3: "HyperSuperText",
      option4: "HyperText Markup Language",
      answer: "HyperText Markup Language",
    },
    {
      question: "Which Element used to bold text in HTML?",
      option1: "img",
      option2: "h1",
      option3: "strong",
      option4: "p",
      answer: "strong",
    },
    {
      question: "Which Element used for Image in HTML?",
      option1: "span",
      option2: "div",
      option3: "image",
      option4: "img",
      answer: "img",
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      option1: "link",
      option2: "a",
      option3: "hyperlink",
      option4: "url",
      answer: "a",
    }];

let continueBtn = document.querySelector(".btn");
let questionHtml = document.querySelector(".question")
let label1 = document.querySelector(".label1")
let label2 = document.querySelector(".label2")
let label3 = document.querySelector(".label3");
let label4 = document.querySelector(".label4");

 var option1 = document.getElementById("firstRadio");
var option2 = document.getElementById("secondRadio");
var option3 = document.getElementById("thirdRadio");
var option4 = document.getElementById("fourthRadio");


let questionCount = 0
continueBtn.addEventListener("click",()=>{
  let input = document.getElementsByName("listGroupRadio")
questionHtml.innerHTML = htmlQuiz[0].question;
label1.innerHTML = htmlQuiz[questionCount].option1;
label2.innerHTML = htmlQuiz[questionCount].option2;
label3.innerHTML = htmlQuiz[questionCount].option3;
label4.innerHTML = htmlQuiz[questionCount].option4;

option1.value = htmlQuiz[questionCount].option1;
option2.value = htmlQuiz[questionCount].option2;
option3.value = htmlQuiz[questionCount].option3;
option4.value = htmlQuiz[questionCount].option4;


// for(let i =0 ; input.length; i++){
// input.checked = false


// }
questionCount++

})




