//getting all required

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");
const background = document.querySelector("body");

let tot_time = 0;
let totTimeCounter;

//If start quit button is clicked
start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo");
  startTotTimer();
}
exit_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo");
}
continue_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo");
  quiz_box.classList.add("activeQuiz");
  showQuestions(0);
  queCounterUpdate(1);
  startTimer(14);
  startTimerLine(0);
}

let que_count = 0;
let counter = 1;
let timeCounter;
let counterLine;
let timeValue = 14;
let widthValue = 0;
let userScore = 0;
let repeat = false;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

next_btn.onclick = ()=>{
  if(que_count<questions.length-1){
    showQuestions(++que_count);
    queCounterUpdate(++counter);
    clearInterval(timeCounter); 
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    timeOff.textContent = "Time Left";
    next_btn.style.display = "none";
  }else{
    clearInterval(timeCounter);
    clearInterval(counterLine);
    showResultBox();
  }
}


//getting questions and options from array
function showQuestions(index){
  if(index<1){
    background.setAttribute("class","bg movies");
  }else if(index>1 && index<4){
    background.setAttribute("class","bg games");
  }else if(index>4 && index<7){
    background.setAttribute("class","bg sports");
  }else if(index>7 && index<10){
    background.setAttribute("class","bg travel");
  }
  const que_text = document.querySelector(".que_text");
  let que_tag = '<span>'+questions[index].numb+". "+ questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+questions[index].options[0]+'</span></div>'
                    +'<div class="option"><span>'+questions[index].options[1]+'</span></div>'
                    +'<div class="option"><span>'+questions[index].options[2]+'</span></div>'
                    +'<div class="option"><span>'+questions[index].options[3]+'</span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;
  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick","optionSelected(this)");
  }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
  clearInterval(timeCounter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correct = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if(userAns==correct){
    userScore++;
    console.log(userScore);
    answer.classList.add("correct");
    console.log("correct");
    answer.insertAdjacentHTML("beforeend",tickIcon);
  }else{
    if(answer!=0){
      answer.classList.add("incorrect");
    console.log("wrong");
    answer.insertAdjacentHTML("beforeend",crossIcon);
    }
    for (let i = 0; i < allOptions; i++) {
      if(option_list.children[i].textContent == correct){
        option_list.children[i].setAttribute("class","option correct");
        if(answer==0){
          option_list.children[i].setAttribute("class","option incorrect");
          option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
        }else{
          option_list.children[i].setAttribute("class","option correct");
          option_list.children[i].insertAdjacentHTML("beforeend",tickIcon);
        }
        
      }
      
    }
  }
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}


function queCounterUpdate(counter){
  const ques_tracker = quiz_box.querySelector(".total_que");
  let total_CountTag = '<span><p>'+counter+'</p>Of<p>'+questions.length+'</p>Questions</span>';
  ques_tracker.innerHTML = total_CountTag;
}

function startTimerLine(time){
  counterLine = setInterval(timer, 27);
  function timer(){
    time++;
    timeLine.style.width = time + "px";
    if(time>549){
      clearInterval(counterLine);
    }    
  }
}

function showResultBox(){
  info_box.classList.remove("activeInfo");
  quiz_box.classList.remove("activeQuiz");
  result_box.classList.add("activeResult");
  const scoreText = result_box.querySelector(".score_text");
  const timeTaken = result_box.querySelector(".time_taken");
  const grade = result_box.querySelector(".grade");
  let total_time = '<span>Time Taken: <p>'+tot_time+'</p>s</span>';
  let grade_text = '<span>grade: <p>'+userScore*10+'%</p></span>';
  timeTaken.innerHTML = total_time;
  grade.innerHTML = grade_text;
  if(userScore>5){
    let scoreTag = '<span>Congratulations! You got <p>'+userScore+'</p> out of <p>10!</p></span>';
    scoreText.innerHTML = scoreTag;
    scoreText.classList.remove("fail");
    scoreText.classList.add("pass");
  }else{
    let scoreTag = '<span>Sorry, You got only <p>'+userScore+'</p> out of <p>10</p></span>';
    scoreText.innerHTML = scoreTag;
    scoreText.classList.remove("pass");
    scoreText.classList.add("fail");
  }
}

function startTotTimer(){
  totTimeCounter = setInterval(timer, 1000);
  function timer(){
    tot_time++;
  }
}

function startTimer(time){
  timeCounter = setInterval(timer, 1000);
  function timer(){
    timeCount.textContent = time;
    time--;
    if(time<9){
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if(time<0){
      clearInterval(timeCounter);
      timeCount.textContent = "00";
      timeOff.textContent = "Time Out";
      let correct = questions[que_count].answer;
      let allOptions = option_list.children.length;
      optionSelected(0);
      for (let i = 0; i < allOptions; i++) {
        if(option_list.children[i].textContent == correct){
            option_list.children[i].setAttribute("class","option incorrect");
        }
      }
      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
      }
      next_btn.style.display = "block";
    }
  }
}


restart_quiz.onclick=()=>{
  console.log("Restart called");
  que_count = 0;
  console.log("QueC is "+que_count);
  counter = 1;
  timeValue = 14;
  widthValue = 0;
  userScore = 0;
  tot_time = 0;
  repeat = true;
  quiz_box.classList.add("activeQuiz");
  result_box.classList.remove("activeResult");
  showQuestions(que_count);
  queCounterUpdate(counter);
  clearInterval(timeCounter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(widthValue);
  next_btn.style.display = "none";
}

quit_quiz.onclick=()=>{
  window.location.reload();
}

