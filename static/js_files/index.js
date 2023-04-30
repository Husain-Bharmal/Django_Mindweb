document.getElementsByClassName("image")[0].addEventListener("click", () => {
        
        window.open("/alphabets", "_self");
});

document.getElementsByClassName("article")[0].addEventListener("click", () => {
        window.open("/alphabets.html", "_self");
});

document.getElementsByClassName("image")[1].addEventListener("click", () => {
        window.open("/number_table.html", "_self");
});

document.getElementsByClassName("article")[1].addEventListener("click", () => {
        window.open("/number_table.html", "_self");
});

add=URL("/ADD")
document.getElementsByClassName("image")[2].addEventListener("click", () => {
        window.open("\mind_web\views.py/ADD.html", "_self");
});

document.getElementsByClassName("article")[2].addEventListener("click", () => {
        window.open("\mind_web\views.py/ADD.html", "_self");
});

document.getElementsByClassName("image")[3].addEventListener("click", () => {
        window.open("/alpha-game.html", "_self");
});
document.getElementsByClassName("article")[3].addEventListener("click", () => {
        window.open("/alpha-game.html", "_self");
});

document.getElementsByClassName("image")[4].addEventListener("click", () => {
        window.open("/alpha-song.html", "_self");
});
document.getElementsByClassName("article")[4].addEventListener("click", () => {
        window.open("/alpha-song.html", "_self");
});

var popup_login = document.getElementById('popup_form');
var pop= document.getElementById('my-cards');
var close = document.getElementById('close_btn');

window.addEventListener("load", function(){

	setTimeout(function(){

		popup_login.classList.add('anyname');
		pop.classList.add('anyname');
		

	 },3000) 


}) 
close.addEventListener("click", function(){
		popup_login.classList.remove('anyname');
		pop.classList.remove('anyname');

	 }) 