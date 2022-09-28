// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// set level
const lvls={
    "Easy": 7,
    "Normal":4,
    "Hard":3
}; 
// set variabels
let timeLeft=document.querySelector(".timel");
let input = document.querySelector(" input");
let restart=document.querySelector(" .restart");
let rest="";
let lvlNameSpan=document.querySelector(".information-game .lvl");
let lvlSecondSpan=document.querySelector(".information-game .seconds ");
let wordRandom;
let index="";
let theWord=document.querySelector(".the-word");
let startbutton=document.querySelector(".start");
let wordcontainer=document.querySelector(".word-container");
let finish= document.querySelector(".finish");
let got=document.querySelector(".got");
let selected=document.getElementById("levels");
let defaultLevelName =selected.value;
let defaultLevelSeconds=lvls[defaultLevelName];


 lvlSecondSpan.innerHTML=defaultLevelSeconds;
 timeLeft.innerHTML=defaultLevelSeconds;
got.innerHTML=0;


// changing levels
selected.onchange= function (){
    defaultLevelName =selected.value;
    defaultLevelSeconds = lvls[defaultLevelName]; 
    lvlSecondSpan.innerHTML=defaultLevelSeconds;
    timeLeft.innerHTML=defaultLevelSeconds;
}

// Disable Paste Event
input.onpaste = function () {
    return false;
}
// when you click start
startbutton.onclick=function(){
    this.remove();
    input.focus();
    display();
    play();
}

// show rondom word && show the rest of words
function display(){
    wordRandom=words[Math.floor(Math.random()* words.length)];
    index=words.indexOf(wordRandom);
    theWord.innerHTML=wordRandom;
    words.splice(index,1);
    for(let i=0;i<words.length;i++){
        let wordDiv=document.createElement("div");
        let txt = document.createTextNode(words[i]);
        wordDiv.appendChild(txt);
    }
    
}

// countdown && compare input value with rondom word && increase the score
function play(){
    timeLeft.innerHTML=defaultLevelSeconds;
    let start=setInterval(function(){
        timeLeft.innerHTML-=1;
        if(timeLeft.innerHTML==="0"){
            finish.innerHTML="";
            clearInterval(start);
            if(input.value.toLowerCase()===wordRandom.toLowerCase()){
                let good =document.createElement("div");
                let textf=document.createTextNode("Nice ");
                setTimeout(function(){
                    textf.remove()},1500)

                good.className="good";
                good.appendChild(textf);
                finish.appendChild(good);
                input.value = '';
                got.innerHTML++;
            
            
                display();
                play();
            }
            else{
                let bad =document.createElement("div");
                let text=document.createTextNode("YOU Lost !");
                setTimeout(function(){
                    text.remove()},1500)
                bad.className="bad";
                bad.appendChild(text);
                finish.appendChild(bad);
                restartDisplay();
            }
        }
    },1000);
}

// display restart button
function restartDisplay(){
    rest=document.createElement("div");
    let buttonTExt=document.createTextNode("Restart");
    rest.appendChild(buttonTExt);
    restart.appendChild(rest);
    input.value = '';
    
}
// action on restart button
restart.onclick=function(){
    rest.remove();
    finish.innerHTML="";
    input.focus();
    display();
    play();
} 
function toggle(id) {
    a = document.getElementById('toggle_'+id);
    b = document.getElementById('display_'+id);
      if (a.style.display=='block') {
        a.style.display='none';
      
      }
      else {
        a.style.display='block';
       
    }
}

function count(id) {
    a = document.getElementById('count_'+id);
    b = document.getElementById('play_'+id);
      if (a.style.display=='block') {
        a.style.display='none';
      
      }
      else {
        a.style.display='block';
       
    }
}

function closeWindow() {

    // Open the new window
    // with the URL replacing the
    // current page using the
    // _self value
    let new_window =
      open(location, '_self');
  
    // Close this window
    new_window.close();
  
    return false;
  }