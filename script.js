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

let question = document.querySelector(".question");
let label1 = document.querySelector(".label1");
let label2 = document.querySelector(".label2");
let label3 = document.querySelector(".label3");
let label4 = document.querySelector(".label4");

let option1 = document.querySelector("#firstRadio");
let option2 = document.querySelector("#secondRadio");
let option3 = document.querySelector("#thirdRadio");
let option4 = document.querySelector("#fourthRadio");

let quizeOptions = document.getElementsByName("listGroupRadio");
let questionCount = 0;
let score = 0;
function renderQuestion (){ 

question.innerHTML = htmlQuiz[questionCount].question;
label1.innerHTML = htmlQuiz[questionCount].option1;
label2.innerHTML = htmlQuiz[questionCount].option2;
 label3.innerHTML = htmlQuiz[questionCount].option3;
 label4.innerHTML = htmlQuiz[questionCount].option4;


 option1.value = htmlQuiz[questionCount].option1;
  option2.value = htmlQuiz[questionCount].option2;
  option3.value = htmlQuiz[questionCount].option3;
  option4.value = htmlQuiz[questionCount].option4;
}

function deSelect() {
  for (var i = 0; i < quizeOptions.length; i++) {
    quizeOptions[i].checked = false;
  }
}


function next() {
  var radioChecked = false;
  for (var i = 0; i < quizeOptions.length; i++) {
    // If value is checked
    if (quizeOptions[i].checked) {
      radioChecked = true;
      
      
      // so check that selected option is equal to answer so increment the score
      if (quizeOptions[i].value === htmlQuiz[questionCount].answer) {
        score++;
        console.log(score);
      }
    }
  }

if(radioChecked === false){
  Swal.fire({
    icon: "error",
    title: "No Option Selected",
   
    
  });
}else{

if (questionCount < htmlQuiz.length -1) {
  questionCount++;
  deSelect();
  renderQuestion();
}else{

showResult();

}
}
}

let announcment = document.querySelector(".result-status")
let totalQ = document.querySelector(".total-question");
let correct = document.querySelector(".correct-question");
let resultContainer = document.querySelector(".result-container")
let quizeContainer = document.querySelector(".center")
let percentageBox = document.querySelector(".percentage")
function showResult (){
let percentage = Math.round(score/ htmlQuiz.length * 100)
resultStatus = ''

if (percentage < 70) {
  resultStatus = ' You are Failed ! Better Luck Next Time'
announcment.classList.add("redText")
resultContainer.classList.remove("d-none")
resultContainer.classList.add("d-flex")
}else{
resultStatus = 'Congratulations ! You are Passed'
resultContainer.classList.remove("d-none")
resultContainer.classList.add("d-flex")
announcment.classList.add("greenText")
}

resultContainer.style.display = "block"
quizeContainer.style.display = "none"

announcment.innerHTML = resultStatus;
totalQ.innerHTML += `<span>${htmlQuiz.length}</span>`;
correct.innerHTML += `<span>${score}</span>`
percentageBox.innerHTML = `%${percentage}`



}



window.onload = renderQuestion();