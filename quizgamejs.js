const container=document.getElementById('container');
const questionbox=document.getElementById('questions');
const choicesbox=document.getElementById('choices');
const nextbuton=document.getElementById('nextbutton');
const scorecard=document.querySelector('.scorecard');
let currentquestionindex=0;
const quiz=[
   { question:"which of the following is not a css property?",
   choices:["margin","padding","border-radius","border-collapse"],
   answer:"border-collapse",
},
{
    question:"which of the following is not a data typr in javascript?",
    choices:["string","boolean","object","float"],
    answer:"float",
},
{
    question:"what is the purpose of this keyword in javascript?",
    choices:["it refers to the current object","itbrefers to the current function"],
    answer:"it refers to the current object",
}
];
let score=0;
//functions to check answers
const checkanswers=()=>{
    const selectedchoice=document.querySelector('.choice.selected');
    if(selectedchoice.textContent===quiz[currentquestionindex].answer){
        alert("correct answer");
        score++;
    }
    else{
        alert("answer is wrong");
    }
    currentquestionindex++;
    if(currentquestionindex < quiz.length){
        
        showquestions();
    }
    else{
        showscorecard();
    }
}
const showscorecard=()=>{
    questionbox.textContent="";
    choicesbox.textContent="";
    nextbuton.textContent="Play Again"
    scorecard.innerHTML=`You scored ${score} out of ${quiz.length}`;
    nextbuton.addEventListener('click',()=>{
         currentquestionindex=0;
         showquestions();
         nextbuton.textContent="next";
         scorecard.innerHTML="";
    });
}
const showquestions=()=>{
const questiondetails=quiz[currentquestionindex];
//console.log(questiondetails);
questionbox.textContent=quiz[currentquestionindex].question;
choicesbox.textContent="";
for(let i=0;i<questiondetails.choices.length;i++){
const currentchoice=quiz[currentquestionindex].choices[i];
const choicediv=document.createElement('div');
choicediv.classList.add('choice');
choicediv.textContent= currentchoice;
choicesbox.appendChild(choicediv);
choicediv.addEventListener('click',()=>{
 if(choicediv.classList.contains('selected')){
    choicediv.classList.remove('selected');
 }
 else{
    choicediv.classList.add('selected');
 }
});
}
}
showquestions();
nextbuton.addEventListener('click',()=>{
    const selectedchoice=document.querySelector('.choice.selected');
    if(!selectedchoice && nextbuton.textContent==="Next"){
        alert("Select your choice");
        return;
    }

    checkanswers();
    
});