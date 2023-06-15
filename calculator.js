
let runningTotal=0; //last total at background
let screenNumber="0";
let previousOperation=""


function handleNumber(numberString) {
    if(screenNumber==="0"){
        screenNumber=numberString
    }else{
        screenNumber+=numberString
    }
    console.log(screenNumber)
}


function handleSymbol(params) {
    console.log("symbol")
    
}



function buttonClick(value){
if (isNaN(value)) {
    handleSymbol(value)
}else
  handleNumber(value)

}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click",(event)=>{
        buttonClick(event.target.innerText)
    })
}

init()