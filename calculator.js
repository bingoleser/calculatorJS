
let runningTotal=0; //last total at background
let screenNumber="0";
let previousOperation=null
const screen= document.querySelector(".screen")

function handleNumber(numberString) {
    if(screenNumber==="0"){
        //if screen=0 means ,it is empty.add new number to screen
       screenNumber=numberString
    }else{
        screenNumber+=numberString //already screen has numbers concate numbers
    }
    screen.innerText=screenNumber
}

function handleMath(params) {
    
    if (screenNumber==="0"){
        return;
    }
    const intScreenNumber=parseInt(screenNumber)

    if (runningTotal=== 0) {
        runningTotal=intScreenNumber
    }else{
        // already we have  number and going to work with them
        flushOperation(intScreenNumber)
    }
    previousOperation=params
    screenNumber="0"
}
function flushOperation(intNumber) {
    console.log(intNumber)
    if (previousOperation==="+") {
        runningTotal+=intNumber
    } else if (previousOperation==="−") {
        runningTotal-=intNumber
    } else if (previousOperation==="×") {
        runningTotal*=intNumber
    } else if (previousOperation==="÷") {
        runningTotal =runningTotal/intNumber
    }
}
function handleSymbol(params) {
   
    switch (params) {
        case "C":
            screenNumber="0";
            runningTotal=0
        break;
        case '=':
            if (previousOperation=== null) {
                return
            }
            flushOperation(parseInt(screenNumber));
            previousOperation=null;
            screenNumber=runningTotal;
            //runningTotal=0
            break;
        case "+":
        case "−":
        case "÷":
         case "×":
          handleMath(params)
         break;
         case"←":
         if (screenNumber.length>1) {
            console.log("backtick")
            screenNumber=screenNumber.slice(0,-1)
         }
         break;
    }
 
}





function buttonClick(value){
if (isNaN(value)) {
    console.log(value)
    handleSymbol(value)
}else{
  handleNumber(value)
    }
screen.innerText=screenNumber
}

function init() {
    document.querySelector(".calc-buttons").addEventListener("click",(event)=>{
        buttonClick(event.target.innerText)
    })
}

init()