const quizData = [


{
   question : "India first national police museum will establish in_____city?",

   a:"chennai",
   b:"delhi",
   c:"nagpur",
   d:"kolkata",
   correct:"b",
},
{
   question : "what does CSS stand for",

   a:"Hyper text markup Language",
   b:"cacading style sheets",
   c:"javascript",
   d:"Dont know",

   correct:"b",
},
{
   question : "World day for water is observed on which of the following dates?",

   a:"22 august",
   b:"22 july",
   c:"22 october",
   d:"22 march",

   correct:"d",
},
{
   question : "The percentage of earth surface covered by india is",

   a:"2.4",
   b:"3.4",
   c:"4.4",
   d:"5.4",

   correct:"a",
},
{
   question : "Which state having largest area of forest cover in India?",

   a:"Arunachal Pradesh",
   b:"Madhya Pradesh",
   c:"Odisha",
   d:"Assam",
   correct:"b",
},
{
   question : "Who is famous for the tag'sher-a-punjab'?",

   a:"Rajguru",
   b:"Udham singh",
   c:"Bhagat singh",
   d:"Maharaja ranjeet sigh",
   correct:"d",
},
{
   question : "When was the muslim league established?",

   a:"1904",
   b:"1910",
   c:"1906",
   d:"1915",
   correct:"c",
},
{
   question : "Which one of the following does not contain silver?",

   a:"Horn silver",
   b:"German silver",
   c:"Ruby silver",
   d:"Lunar caustic",
   correct:"d",
},
{
   question : "Which country awards the nobel prize?",

   a:"Sweden",
   b:"Ireland",
   c:"England",
   d:"America",
   correct:"a",
},
{
   question : "Who has written famous book padmavat?",

   a:"Nakhsbai",
   b:"Hasan nizami",
   c:"Al biruni",
   d:"Malik mohammad jayasi",
   correct:"d",
},

]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");


let currentQuiz = 0;
let score = 0;

function loadQuiz () {
  deselectAnswers ();
	const currentQuizData = quizData[currentQuiz];
     questionEl.innerText = currentQuizData.question;
     a_text.innerText = currentQuizData.a;
     b_text.innerText = currentQuizData.b;
     c_text.innerText = currentQuizData.c;
     d_text.innerText = currentQuizData.d;

}

loadQuiz();


function getSelected () {

      let answer = undefined;

      answerEls.forEach((answerEL)=> {
            if(answerEL.checked)
            {
            	answer = answerEL.id;
            }
      	
      });

      return answer;

	}

function deselectAnswers () {
	answerEls.forEach(answerEL=> {
            answerEL.checked = false;
      	
      });
}

submit.addEventListener("click", ()=>{

  const answer = getSelected();
   
   if(answer){
         if(answer === quizData[currentQuiz].correct){

         	score++;
         }
         
         currentQuiz++;

         if(currentQuiz < quizData.length){
         	loadQuiz();
         }
         else{
         	quiz.innerHTML = `<h2>Correct answers ${score}/${quizData.length}</h2>`;
         }

   }

});
