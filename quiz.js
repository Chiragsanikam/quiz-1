var readlineSync = require('readline-sync')
var userName = readlineSync.question("hey what's your name? ");
let score=0;
console.log("welcome "+ userName + ", to this mini game!")
console.log("-----------------------------------------------")

function add(question, answer){
  var answer_main = readlineSync.question(question);

  if(answer_main==answer){
    console.log("you are right")
    score=score+1;
  }
  else{
    console.log("you are wrong")
    score=score;
  }
  console.log("your score is: ", score);
  console.log("-----------------------------------------------")

}


let questions =[{
  question:"what does R stands for in SR chirag ? ",
  answer:"ravi"
},
  {
   question:"what's his dog's name ",
  answer:"chinnu"
  },
  {
   question:"whats his favourite pizza place :) ? ",
  answer:"brikoven"
  }]   ;
for(let i=0; i<questions.length;i++){
  add(questions[i].question, questions[i].answer)
}
console.log("your final score is: ", score)
                
  