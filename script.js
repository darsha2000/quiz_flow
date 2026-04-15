import { quizData } from "./data.js";

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const button = document.getElementById("submit");
const opts = document.getElementById("options");

let currentQuestion = 0
let score = 0 
function loadQuestions(){
  let current = quizData[currentQuestion];

  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d; 
  
  document.querySelectorAll('input[name="answer"]').forEach(el => el.checked = false)
}

window.nextstep = function() {

  let answer = document.querySelector('input[name="answer"]:checked') 
  
  if(!answer){
    alert("select any option");
    return;
  }
 console.log(score)
  if(answer.value === quizData[currentQuestion].correct){
    score++;
  }
  console.log(score)
  currentQuestion++;
  let wrong  = (quizData.length - score);


  if(currentQuestion < quizData.length){
    loadQuestions();
  }else{
   document.querySelector("h1").innerHTML = `You have ${score} correct and ${wrong} wrong answers`;
   opts.innerHTML = ""
  
   button.innerHTML = "Restart"

   button.onclick = () =>{
    location.reload();
   }
  }
  
};

loadQuestions()
