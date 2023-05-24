let countFunc= document.getElementById("count-btn");
let clickNum = document.getElementById("innertext");
let count = 0;
let records = document.getElementById("notes")
let savings = 0;

function pressed(){
    count++ ;
    clickNum.textContent = count;
}

function keep(){
 records.innerText = count;
 count = 0;
 clickNum.textContent = count ;

}
