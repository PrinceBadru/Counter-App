let countFunc= document.getElementById("count-btn");
let clickNum = document.getElementById("innertext");
let count = 0;

function pressed(){
    count++ ;
    clickNum.textContent = count;
}
