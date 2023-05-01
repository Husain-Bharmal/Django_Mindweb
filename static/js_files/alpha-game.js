let img = document.getElementById('images')
let restbtn = document.getElementById('reset') 
let imgtag = document.querySelector(".imagesize")
// let imgtag = document.getElementsByClassName("image-pic")
const inputs = document.querySelector(".inputs")
typing_inputs = document.querySelector(".typeinput")
guessleft = document.querySelector(".remaining span")


let word,maxguess,correct=[];

function randomimg(){
    let imgobj = imglist[Math.floor(Math.random()*imglist.length)]
    word = imgobj[1]
    maxguess = 5;correct=[];
    imgtag.src=imgobj[0];
    let html = "";

    for(let i =0 ;i<word.length;i++){
        html +=`<input type="text" maxlength=1 >`;
    }
    guessleft.innerHTML = maxguess
    inputs.innerHTML = html;
}
randomimg()


function game(e){
    let key = e.target.value
    if(key.match(/^[A-Za-z]+$/) && !correct.includes(key)){
        if(word.includes(key)){
            // correct.push(key)
            for(let i=0;i<word.length;i++){
                if(word[i]===key){
                    correct.push(word[i])
                    inputs.querySelectorAll("input")[i].value=key
                }
            }
        }
        else{
            maxguess--;
        }
    }
    guessleft.innerHTML = maxguess;
    typing_inputs.value =""


    setTimeout(() => {
        if(correct.length===word.length){
            if("speechSynthesis" in window){
                let msg = new SpeechSynthesisUtterance(`${word}`);
                speechSynthesis.speak(msg);
            }
            alert(`Congrats!! the spelling is ${word.toUpperCase()} `);
            randomimg();
        }else if(maxguess<=0){
            // console.log(word)
            for(i=0;i<word.length;i++){
                inputs.querySelectorAll("input")[i].value=word[i]
            }
            let msg1 = new SpeechSynthesisUtterance(`${word}`);
                speechSynthesis.speak(msg1)
                alert("OOPS!!! you are out of guesses.")
            }
    },100);


}

restbtn.addEventListener("click",randomimg)
typing_inputs.addEventListener("input",game)
document.addEventListener("keydown",()=>typing_inputs.focus())




